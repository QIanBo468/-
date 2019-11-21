<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",

  data() {
    return {};
  }
};
</script>
<style>
/*==公共css==*/
html,
body {
  color: #000;
  font-size: 14px;
  height: 100vh;
  background: #f7f7f9;
  margin: 0;
  padding: 0;
}
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
}
fieldset,
img {
  border: 0 none;
}

img {
  vertical-align: middle;
}

li {
  list-style: none;
}
</style>
