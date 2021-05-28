<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import Input from './Input.svelte'
</script>

<Meta
    title="Example/Input"
    component={Input}
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
