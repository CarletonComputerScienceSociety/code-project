<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import QuestionCard from './QuestionCard.svelte'
</script>


<Meta
    title="Example/QuestionCard"
    component={QuestionCard}
    argTypes={{
        level: {
            control: { type: 'number', min: 1, max: 3, step: 1 }
        },
        title: { control: 'text' },
        description: { control: 'text' }
    }}
/>

<Template let:args>
    <QuestionCard {...args}/>
</Template>

<Story 
    name="Basic"
    args={{
        difficulty: 'Basic',
        title: 'P1: Hello World',
        description: 'Print hello world to console'
    }}
/>

<Story 
    name="Intermediate"
    args={{
        difficulty: 'Intermediate',
        title: 'P2: Simple Graphics Drawing',
        description: 'Draw a 1:1 recreation of Da Vinci\'s Mona Lisa with Simple Graphics'
    }}
/>

<Story 
    name="Challenging"
    args={{
        difficulty: 'Challenging',
        title: 'P3: Make google',
        description: 'Refer to the title'
    }}
/>
