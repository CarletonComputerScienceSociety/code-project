<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import QuestionAnswer from './QuestionAnswer.svelte'
</script>

<Meta
    title="Example/QuestionAnswer"
    component={QuestionAnswer}
    argTypes={{
        onClick: { action: 'onClick' }
    }}
/>

<Template let:args>
    <QuestionAnswer {...args} on:click={args.onClick}/>
</Template>

<Story
    name="Neutral Question"
    args={{
        cssClass: ''
    }}
/>

<Story
    name="Wrong Answer"
    args={{
        cssClass: 'error-input'
    }}
/>

<Story
    name="Right Answer"
    args={{
        cssClass: 'correct-input'
    }}
/>

