<template>
  <div>
    test drag
    <draggable
      v-model="myArray"
      group="people"
      @start="drag = true"
      @end="drag = false"
    >
      <div v-for="element in myArray" :key="element.id">{{ element.name }}</div>
    </draggable>
  </div>
</template>
<script>
export default {
  name: "TestDrag",
  data() {
    return {
      myArray: [
        {
          name: "John",
          text: "",
          id: 0,
        },
        {
          name: "Joao",
          text: "",
          id: 1,
        },
        {
          name: "Jean",
          text: "",
          id: 2,
        },
      ],
    };
  },
};
</script>