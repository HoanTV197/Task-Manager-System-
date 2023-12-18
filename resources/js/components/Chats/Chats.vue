<template>
  <div>
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body"></div>
      </div>
    </div>
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header border-0">
              <h3 class="mb-0">Chat</h3>
            </div>
            <div class="card-body">
              <vue-chat-scroll class="chat-container">
                <div v-for="(message, index) in messages" :key="index" class="message" :class="{ 'user-message': message.sender === 'user', 'bot-message': message.sender === 'bot' }">
                  {{ message.text }}
                </div>
              </vue-chat-scroll>
            </div>
            <div class="card-footer">
              <div class="input-group">
                <input v-model="newMessage" type="text" class="form-control" placeholder="Nhập tin nhắn..." @keyup.enter="sendMessage" />
                <div class="input-group-append">
                  <button @click="sendMessage" class="btn btn-primary">Gửi</button>
                </div>
              </div>
              <div class="topic-questions">
                <p><strong>Câu hỏi thường gặp:</strong></p>
                <ul>
                  <li v-for="(question, index) in topicQuestions" :key="index" @click="selectTopicQuestion(question)">{{ question }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueChatScroll } from 'vue-chat-scroll';

export default {
  components: {
    VueChatScroll,
  },
  data() {
    return {
      messages: [
        { text: 'Xin chào!', sender: 'bot' },
        { text: 'Chào bạn! Tôi là bot quản lý nhiệm vụ. Bạn cần giúp đỡ về điều gì?', sender: 'bot' },
      ],
      newMessage: '',
      faqData: [
        { question: 'Làm cách nào để tạo một nhiệm vụ mới?', answer: 'Để tạo một nhiệm vụ mới, bạn có thể điều hướng đến trang Quản lý Nhiệm Vụ và nhấp vào nút "Thêm Nhiệm Vụ".' },
        { question: 'Làm cách nào để thêm thành viên vào dự án?', answer: 'Để thêm thành viên vào dự án, bạn có thể vào trang Dự Án, chọn dự án cần thêm thành viên, và sau đó chọn "Quản lý Thành Viên".' },
        { question: 'Làm cách nào để quản lý nhiệm vụ cá nhân?', answer: 'Để quản lý nhiệm vụ cá nhân, bạn có thể vào trang "Nhiệm Vụ Cá Nhân" và thực hiện các thao tác như thêm, sửa, xoá nhiệm vụ.' },
        { question: 'Làm cách nào để tạo dự án nhóm?', answer: 'Để tạo dự án nhóm, bạn có thể vào trang "Dự Án Nhóm" và nhấp vào nút "Tạo Dự Án Nhóm" để bắt đầu.' },
      ],
      topicQuestions: [
        'Làm cách nào để quản lý nhiệm vụ cá nhân?',
        'Làm cách nào để tạo dự án nhóm?',
      ],
    };
  },

  methods: {
    selectTopicQuestion(question) {
      this.newMessage = question;
      this.sendMessage(true); // Pass true to indicate it's a topic question
    },

    sendMessage(isTopicQuestion = false) {
      const userMessage = { text: this.newMessage, sender: 'user' };
      this.messages.push(userMessage);
      this.newMessage = '';

      if (isTopicQuestion) {
        const answer = this.getAnswerFromFAQ(userMessage.text);
        this.sendBotMessage(answer);
      } else {
        const answer = this.getBotAnswer(userMessage.text);
        this.sendBotMessage(answer);
      }
    },

    getAnswerFromFAQ(question) {
      const faqEntry = this.faqData.find(entry => entry.question === question);
      return faqEntry ? faqEntry.answer : 'Xin lỗi, tôi không hiểu câu hỏi của bạn.';
    },

    getBotAnswer(userMessage) {
      // Implement your logic to get a bot response based on user's message
      // Return the response string
      return 'Để quản lý nhiệm vụ cá nhân, bạn có thể vào trang "Task" o Sidebar và thực hiện các thao tác như thêm, sửa, xoá nhiệm vụ.';
    },

    sendBotMessage(answer) {
      setTimeout(() => {
        this.messages.push({ text: answer, sender: 'bot' });
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* Thêm các kiểu CSS cho trang chat của bạn */
.chat-container {
  height: 300px;
  overflow-y: auto;
}

.message {
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
}

.user-message {
  background-color: #3490dc;
  color: #fff;
}

.bot-message {
  background-color: #38c172;
  color: #fff;
}
</style>
