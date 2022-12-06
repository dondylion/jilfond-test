<template>
  <div id="app">
    <notifications group="foo" />
    <div class="header">
      <span>Жилфонд</span>
      <span>Пользователь</span>
    </div>
    <Users/>
  </div>
</template>

<script>
  import Users from '@/components/Users';

  export default {
    name: 'App',
    components: {
      Users
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Montserrat', sans-serif;
    margin: 42px;
    .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      font-size: 16px;
      vertical-align: bottom;
      span:first-child {
        font-size: 32px;
        color: #E31F24;
        font-weight: 700;
      }
    }
    svg {
      flex-shrink: 0;
    }
  }
</style>
