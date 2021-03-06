import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import '@omiu/input'
import '@omiu/select'
import '@omiu/switch'
import '@omiu/radio'
import '@omiu/checkbox'


interface Props { }

const tagName = 'admin-form'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }
}

@tag(tagName)
export default class extends WeElement<Props> {
  static css = sheet.target

  items = [{ label: '广东省-深圳市', value: 1 }, { label: '江西省-抚州市', value: 2 }, { label: '河北省-石家庄', value: 3 }]

  render() {
    return (
      <div style={{ width: '480px' }} class={tw`text-sm px-10 py-10 text-gray-500`}>
        <div class={tw`leading-8 mb-6`}>
          <label class={tw`w-16 float-left align-middle`} >用户姓名</label>
          <div class={tw`leading-8 ml-16`}>
            <o-input size="small" block></o-input>
          </div>
        </div>

        <div class={tw`leading-8 mb-6`}>
          <label class={tw`w-16 float-left align-middle`} >出生地址</label>
          <div class={tw`leading-8 ml-16`}>
            <o-select css={`
            .o-select .o-input__inner {
              width: 337px;
            `} size="small" placeholder="选择一个出生地"
              items={this.items}
            ></o-select>
          </div>
        </div>


        <div class={tw`leading-8 mb-6`}>
          <label class={tw`w-16 float-left align-middle`} >是否结婚</label>
          <div class={tw`leading-8 ml-16 pt-1`}>
            <o-switch id="switchA" checked="0">
            </o-switch>
          </div>
        </div>



         <div class={tw`leading-8 mb-6`}>
          <label class={tw`w-16 float-left align-middle`} >喜爱水果</label>
          <div class={tw`leading-8 ml-10`}>
            <o-checkbox class={tw``} label='苹果🍎'> </o-checkbox>
            <o-checkbox class={tw` ml-6`} label='草莓🍓'> </o-checkbox>
            <o-checkbox class={tw` ml-6`} label='葡萄🍇'> </o-checkbox>
            <o-checkbox class={tw` ml-6`} label='香蕉🍌'> </o-checkbox>
            <o-checkbox class={tw` ml-6`} label='梨子🍐'> </o-checkbox>
            <o-checkbox class={tw` ml-6`} label='橘子🍊'> </o-checkbox>
          </div>
        </div>

        <div class={tw`leading-8 mb-6`}>
          <label class={tw`w-16 float-left align-middle`} >用户性别</label>
          <div class={tw`leading-8 ml-16`}>
            <o-radio name="sex" checked value="0">男</o-radio>
            <o-radio name="sex" value="1" class={tw`ml-2`}>女</o-radio>
          </div>
        </div>


        <div class={tw`leading-8 mb-6`}>
          <label class={tw`w-16 float-left align-middle`} >个性签名</label>
          <div class={tw`leading-8 ml-16`}>
            <o-input type="textarea" block></o-input>
          </div>
        </div>



        <div class={tw`leading-8 mb-6`}>
          <label class={tw`w-16 float-left align-middle`} ></label>
          <div class={tw`leading-8 ml-16`}>
          <o-button size="small" type="primary">创建</o-button>

          <o-button size="small" class={tw`ml-6`}>重置</o-button>
          </div>
        </div>


      </div>
    )
  }
}
