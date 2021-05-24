<template>
    <div class="example">
        Hello, World! {{something}} 
    </div>
</template>
<script>

    module.exports = {
        data(){
            return {
                something: "again!"
            }
        }
    }

</script>
<style>
    .example{
        color: red;
        text-decoration: underline;
    }
</style>
