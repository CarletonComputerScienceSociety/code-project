<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import ButtonInverse from './ButtonInverse.svelte'
</script>

<Meta
    title="Example/ButtonInverse"
    component={ButtonInverse}
    argTypes={{
        label: { control: 'text' },
        onClick: { action: 'onClick' }
    }}
/>

<Template let:args>
    <ButtonInverse {...args} on:click={args.onClick}/>
</Template>

<Story
    name="About"
    args={{
        label: 'About'
    }}
/>
