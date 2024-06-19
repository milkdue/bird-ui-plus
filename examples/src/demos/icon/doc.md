## Icon 图标

提供了一套常用的图标集合

:::default
<icon-list></icon-list>
:::

:::demo
图标类型
默认状态、悬浮状态、点击状态和禁用状态
<icon-type></icon-type>
:::

### API

| 参数     | 描述               | 类型                                    | 默认值 |
| -------- | ----------------- | --------------------------------------- | ------ |
|`name`|图标名字或者图片的链接|`string`|-|
|`hover`|是否 `hover`，配合 `hoverColor`使用|`boolean`|`false`|
|`hoverColor`| `hover` 状态下的颜色|`string`|`var(--primary-color-light)`|
|`width`|宽度|`string \| number`|-|
|`height`|高度|`string \| number`|-|
|`fill`|填充色|`string`|-|
|`type`|类型|`primary \| ordinary \| aux`|-|
|`disabled`|是否禁用|`boolean`|`false`|
