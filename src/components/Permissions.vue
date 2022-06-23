<template>
    <div id="acls">
        <h3>Your Permissions</h3>
        <p v-role:user>You can view.</p>
        <p v-role:admin>You are admin!</p>
    </div>
</template>
<script>
export default {
};
</script>
<style>
#acls {
    text-align: left;
}
</style>