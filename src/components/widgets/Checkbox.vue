<template>
  <div class="field">
    <div class="checkbox-field" :class="{ toggle }">
      <input
        class="hidden"
        type="checkbox"
        :id="id"
        :checked="modelValue || null"
        :disabled="disabled"
        @change="onChange"
      />
      <label :for="id">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',

  props: {
    disabled: {
      default: false,
      type: Boolean
    },
    label: {
      default: '',
      type: String,
      required: true
    },
    modelValue: {
      default: false,
      type: Boolean
    },
    toggle: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      id: null
    }
  },

  mounted() {
    this.id = this.$.uid
  },

  emits: ['change', 'update:modelValue'],

  methods: {
    onChange(event) {
      this.$emit('update:modelValue', event.target.checked)
      this.$emit('change', event.target.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
.dark {
  .checkbox-field label {
    &:before {
      border-color: $dark-grey-lightest;
    }
    &:after {
      color: $light-grey;
    }
  }
  .toggle label {
    &:before {
      background-color: $mid-grey;
    }
  }
}
.checkbox-field {
  display: inline-flex;
  align-items: center;

  label {
    position: relative;
    padding-left: 1.5rem;
    cursor: pointer;

    &:before,
    &:after {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      content: '';
      display: block;
      width: 1rem;
      height: 1rem;
      border: 1px solid $light-grey;
      border-radius: 2px;
      background-color: transparent;
    }
    &:after {
      border-color: transparent;
      color: $dark-grey-lightest;
      line-height: 0.8rem;
    }
  }
  input[type='checkbox'] {
    &[disabled] + label {
      opacity: 0.5;
      cursor: default;
    }
    &:checked + label:after {
      content: '✔';
    }
  }
}
.toggle {
  label {
    padding-left: 3.5rem;

    &:before {
      border-radius: 0.75rem;
      width: 2.6rem;
      height: 1.5rem;
      background-color: $light-grey;
      transition: background-color 200ms ease-in;
    }
    &:after {
      width: 1.3rem;
      height: 1.3rem;
      background-color: $white;
      border-radius: 50%;
      transition: left 150ms ease-in;
    }
  }
  input[type='checkbox']:checked + label {
    &:before {
      background-color: $green;
    }
    &:after {
      content: '';
      left: 1.3rem;
    }
  }
}
</style>
