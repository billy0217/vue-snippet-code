<template>
  <div class="l-page-wrapper">
    <Table />
  </div>
</template>

<script>

// @ is an alias to /src
import Table from '@/components/Table.vue'

export default {
  name: 'App',
  components: {
    Table
  }
}
</script>

<style lang="scss">
  @import "./scss/style";

  :root {
    --color-black: #{$black};
    --color-white: #{$white};
    --color-grey--light: #{$grey--light};
    --color-grey: #{$grey};
    --color-grey--dark: #{$grey--dark};
    --color-blue: #{$blue};
  
    --border-radius: #{$borderRadius};

    --size-lsu: #{$bsu};
    --size-bsu: #{$ssu};
    --size-ssu: #{$tsu};
    --size-tsu: #{$tsu};
  }

  @include bp("small") {
    :root{
      --size-lsu: #{$lsu};
      --size-bsu: #{$bsu};
      --size-ssu: #{$ssu};
    }
  }

  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  a {
    color: var(--color-blue);
    text-decoration: none;

    &:hover,
    &:focus {
      color: darken($blue, 10%);
    }
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-grey--dark);
    padding-top: $lsu * 1.5;
    padding-bottom: $lsu * 1.5;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: var(--color-grey--light);
    
  }

</style>
