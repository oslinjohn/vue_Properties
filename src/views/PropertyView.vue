<template>
    <div v-if="property" class="property-details">
        <img :src="property.image_url" :alt="property.title" />
        <div>
            <h2>{{ property.title }}</h2>
            <p>Area: {{ property.area }}</p>
            <p>Bedrooms: {{ property.bedrooms }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id"],
    computed: {
        property() {
            return this.$store.state.property;
        },
    },
    mounted() {
        this.$store.dispatch("getProperty", this.id);
    },
};
</script>

<style>
.property-details {
    display: flex;
}
</style>
