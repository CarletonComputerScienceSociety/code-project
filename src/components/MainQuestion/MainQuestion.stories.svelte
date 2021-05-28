<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import MainQuestion from './MainQuestion.svelte'
</script>


<Meta
    title="Example/MainQuestion"
    component={MainQuestion}
    argTypes={{
        title: { control: 'text' },
        description: { control: 'text' },
        imgSrc: { control: 'text' },
        imgAlt: { control: 'text' },
    }}
/>

<Template let:args>
    <MainQuestion {...args}/>
</Template>

<Story 
    name="With Image"
    args={{
        title: 'P1: Hello World',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et metus sed diam aliquam tempus. Duis tincidunt libero dui. Mauris a venenatis lectus. Nullam elementum mi sit amet tincidunt tincidunt. Phasellus egestas turpis ac metus varius mollis. Etiam imperdiet luctus tempor. Praesent odio magna, convallis ac tellus nec, tempus accumsan ipsum. Ut fermentum ligula viverra sodales sagittis. Duis suscipit dui at vulputate sodales. Proin accumsan libero non scelerisque vestibulum. Suspendisse pharetra erat nisi, sed dictum tellus sagittis vitae. Aliquam pellentesque, nisi id facilisis commodo, ante urna scelerisque urna, vel vehicula dolor urna non turpis. Aenean finibus, velit at vestibulum facilisis, enim quam scelerisque ex, eget finibus nisl nisi vitae neque. Aliquam tempor metus velit, sit amet sagittis mauris iaculis ut. Aliquam vitae nibh eros. Ut dolor tellus, pulvinar sed dui vel, facilisis tincidunt erat. Mauris convallis quam nulla, eu dignissim magna molestie vitae. Nunc fringilla hendrerit ipsum, in sagittis metus commodo convallis. Ut lacinia gravida enim, in sagittis metus efficitur vel. Cras tincidunt arcu ullamcorper elit facilisis, pellentesque auctor mauris placerat. In vehicula est ut justo hendrerit pretium. In nunc nibh, iaculis at tortor quis, tincidunt placerat orci. Donec accumsan orci a orci placerat malesuada. Nunc pretium condimentum quam eget vehicula. Sed eleifend accumsan orci. Sed dignissim, justo quis mattis interdum, nisl dui sodales felis, ut consectetur enim ante sed ante. Maecenas sodales dapibus odio id aliquet. Proin dapibus felis quis vehicula pulvinar. Cras et nisl at risus porta dictum ut imperdiet libero. In non blandit nunc. Pellentesque ut dictum lorem. Cras elementum tincidunt arcu vel porta.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/ef/RD-S_sample_graph.png',
        imgAlt: 'Graph representing stuff.'
    }}
/>

<Story 
    name="No Image"
    args={{
        title: 'P2: Simple Graphics Drawing',
        description: 'Draw a 1:1 recreation of Da Vinci\'s Mona Lisa with Simple Graphics'
    }}
/>
