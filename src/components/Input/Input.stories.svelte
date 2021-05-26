<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import App from '../../App.svelte'
import About from '../../pages/About/About.svelte'
import Input from './Input.svelte'
</script>

<Meta
    title="Example/Input"
    component={Input}
    argTypes={{
        label: { control: 'text' },
    }}
/>

<Template let:args>
    <Input {...args} />
</Template>

<Story
    name="Response"
    args={{
        placeholder: 'Enter your response here...',
        id: 'response'
    }}
/>
