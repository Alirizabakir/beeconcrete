<template>
  <div class="content">
    <ul class="section-one">
      <li class="one-item"><span class="border-r">Bag</span></li>
    </ul>
    <div class="section-two">
      <div class="two-header">
        <div @click="$router.go(-1)" class="prev"></div>
        Bag
      </div>
        <PayComponent />
    </div>
  </div>
</template>

<script>
export default {
  name: "Bag",
};
</script>

<style lang="scss" scoped>
.content {
  .section-one {
    display: none;
  }
  .section-two {
  }
}

@media only screen and (max-width: 1024px) {
  .content {
   
  } 
}
</style>