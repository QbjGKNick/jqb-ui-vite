// JSX 对应 TS 就是 TSX
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'JSXButton',
  render() {
    return <button>JSX Button</button>
  }
})