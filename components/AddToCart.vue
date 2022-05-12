<template>
  <div :class="{active: AddToCart}" class="box"><p class="flex a-center j-center"><slot/></p></div>
</template>
<script>
export default {
    props: ['AddToCart']
}
</script>
<style lang="scss" scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  opacity: 0;
  transition: all 1s;
  p {
    position: relative;
    width: 110px;
    height: 30px;
    border: 2px solid rgb(73, 126, 57);
    border-radius: 2px;
      background-color: rgb(9, 65, 9);
    color: white;
    font-size: var(--smallSize);
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: -15%;
      left: 50%;
      transform-origin: center;
      transform: translate(-50%, -15%) rotate(45deg);
      width: 10px;
      height: 10px;
      border-left: 2px solid rgb(73, 126, 57);
      border-top: 2px solid rgb(73, 126, 57);
      background-color: rgb(9, 65, 9);
    }
  }
}
.active {
    opacity: 1;
}
</style>