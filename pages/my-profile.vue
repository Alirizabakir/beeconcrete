<template>
    <div>
        <Slider />
        <Container>
            <h1 id="pots" class="text-3xl text-gray-dark border-b border-gray-dark pt-20">MY PROFILE</h1>
            <MyProfile/>
        </Container>
    </div>
</template>

<script>
export default {
    middleware: ["auth"],
}
</script>