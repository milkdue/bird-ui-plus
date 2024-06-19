## 分割线

:::demo
基本分割线
基于 hr 完成的分割线
<divider-base></divider-base>
:::

:::demo
线型
实线、虚线、点线、双横线等多种线型
<divider-line></divider-line>
:::

:::demo
线宽
自定义分割线的线宽
<divider-width></divider-width>
:::

:::demo
分割线颜色
除了基本颜色，分割线也支持自定义线条的颜色
<divider-color></divider-color>
:::

:::demo
疏密可控的虚线
对于虚线，可以控制它的虚实比例，使用线性渐变完成
<divider-dashed></divider-dashed>
:::

:::demo
斜纹分割线
有时候需要分界线更加明显的分隔线，可以使用斜纹分割线
<divider-oblique></divider-oblique>
:::

:::demo
两端透明的分割线
利用 mask-image 完成的透明分割线
<divider-transparent></divider-transparent>
:::

:::demo
分割线文字
将文字置于分割线中间，仅限于实线
<divider-text></divider-text>
:::

### API

| 参数     | 描述               | 类型                                    | 默认值 |
| -------- | ----------------- | --------------------------------------- | ------ |
|`type`|分割线的类型|`primary \| link \| success \| warn \| error`|`primary`|
|`lineType`|线型|`solid \| dotted \| dashed \| double`|-|
|`width`|线宽|`number`|-|
|`fillWidth`|虚线中控制实线的宽度，仅在`lineType`为`dashed`时生效|`number`|-|
|`dashWidth`|虚线中控制虚线的宽度，仅在`lineType`为`dashed`时生效|`number`|-|
|`color`|分割线颜色|`string`|-|
|`angle`|斜纹分割线的角度，仅在`lineType`为`dashed`时生效|`number`|-|
|`fade`|是否两端虚化|`boolean`|-|
|`content`|分割线文字，仅在`lineType`为`solid`时生效|`string`|-|
