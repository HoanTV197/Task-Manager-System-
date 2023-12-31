<template>
    <div class="row">
        <div class="col-md-7 col ">
            <div class="card">
                <div class="card-header border-0">
                    <div class="row align-items-center">
                        <div class="col">
                            <h3 class="mb-0">Task</h3>
                        </div>
                        <div class="col text-right">
                            <router-link to="/task" class="btn btn-sm btn-primary">See all</router-link>
                        </div>
                    </div>
                </div>
                <div class="table-responsive" id="taskLoading">
                    <!-- Projects table -->
                    <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Task</th>
                                <th scope="col">User</th>
                                <th scope="col" class="sort">Status</th>
                                <th scope="col">Due date</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in items" :key="item.id">
                            <tr>
                                <th scope="row">
                                    {{ item.name }}
                                </th>
                                <td>
                                    {{ item.responsible_user }}
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <span class="badge badge-dot mr-4">
                                            <i class="bg-danger" v-if="item.status == status.pending"></i>
                                            <i class="bg-success" v-if="item.status == status.completed"></i>
                                            <span class="status">{{ item.status }}</span>
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <span class="mr-2">{{ item.due_date }}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-if="dataNotFound">
                            <tr class="text-center">
                                <td colspan="10">No Data Display</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Quick Notes Section -->
        <div class="col-md-5 col">
            <div class="card">
                <div class="card-header border-0">
                    <h3 class="mb-0">Quick Notes</h3>
                </div>
                <div class="card-body">
                    <!-- Quick Notes Table -->
                    <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Note</th>
                                <th scope="col" class="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(note, index) in quickNotes" :key="index">
                                <td :style="{ color: getRandomColor() }">{{ note }}</td>
                                <td class="text-center">
                                    <button @click="editNote(index)" class="btn btn-sm btn-warning">Edit</button>
                                    <button @click="deleteNote(index)" class="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Add Note Input -->
                    <div class="form-group">
                        <textarea v-model="newNote" class="form-control add-note-input" rows="2"
                            placeholder="Type your notes here..."></textarea>
                    </div>
                    <button @click="addNote" class="btn btn-sm btn-success">Add Note</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TaskTable",
    data() {
        return {
            items: {},
            status: {
                pending: "PENDING",
                completed: "COMPLETED",
            },
            dataNotFound: false,
            quickNotes: [],
            newNote: "",
        }
    },
    methods: {
        getTask() {
            let Loading = this.block("taskLoading");
            this.axios.get("/api/v1/tasks")
                .then(response => {
                    this.items = response.data.data;
                    Loading.close();
                    this.dataNotFound = false
                })
                .catch(error => {
                    this.items = null
                    this.dataNotFound = true
                    Loading.close();
                });
        },

        // Method to add a new note
        addNote() {
            if (this.newNote.trim() !== "") {
                this.quickNotes.push(this.newNote.trim());
                this.newNote = ""; // Clear the input after adding a note
            }
        },

        // Method to edit an existing note
        editNote(index) {
            const editedNote = prompt("Edit Note", this.quickNotes[index]);
            if (editedNote !== null) {
                this.$set(this.quickNotes, index, editedNote.trim());
            }
        },

        // Method to delete a note
        deleteNote(index) {
            const confirmDelete = confirm("Are you sure you want to delete this note?");
            if (confirmDelete) {
                this.quickNotes.splice(index, 1);
            }
        },
        // Method to generate a random color
        getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
    },

    mounted() {
        this.getTask();
    }
}
</script>
<style scoped>
/* Quick Notes Section */
.quick-notes {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.quick-note {
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.quick-note button {
    margin-left: 10px;
    cursor: pointer;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.quick-note button:hover {
    background-color: #0056b3;
}

/* Add Note Input */
.add-note-input {
    margin-top: 10px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 5px;
}

.add-note-input:focus {
    outline: none;
    border-color: #007bff;
}

/* Add, Edit, Delete Buttons */
.action-buttons button {
    cursor: pointer;
    background-color: #28a745;
    color: #ffffff;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    margin-right: 10px;
    transition: background-color 0.3s ease;
}

.action-buttons button.edit {
    background-color: #ffc107;
}

.action-buttons button.delete {
    background-color: #dc3545;
}

.action-buttons button:hover {
    background-color: #218838;
}

.add-note-input {
    margin-top: 10px;
}
</style>
