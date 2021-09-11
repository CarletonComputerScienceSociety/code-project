<script lang="ts">
    import type { Question } from '../../types'
    import { Navbar, Input, Button, MainQuestion, CountdownOne, Footer } from '../../components'
    import { getQuestion } from '../../services'
    import { onMount } from 'svelte'

    export let params = {}

    // THIS IS A TEMPORARY QUESTION UNTILL WE FIGURE OUT HOW TO RENDER AFTER AWAIT
    let question: Question = {
      id: -1,
      body: 'awdawd',
      categories: [],
      difficulty: 'Basic',
      expiration_date: '2021-05-31',
      format: 't',
      release_date: '2021-04-30',
      title: 'test'
    }

    let expired = false;

    onMount(async () => {
      window.scrollTo(0, 0);
      // THE ERROR WITH params.id IS BECAUSE WE NEED TO CREATE A TYPE
      question = await getQuestion(parseInt(params.id))


      let date = new Date(question.expiration_date)
      if (date <= new Date(Date.now())){
          expired = true;
      } else {
          expired = false;
      }

    })

    const submitValidation = async () => {
        if(document.getElementById('email'+question.id).value.length<1){
            document.querySelector("#result" + question.id).innerHTML ='<h2 style="color:red">Please enter a valid email.</h2>'
        }else if(document.getElementById('answer'+question.id).value.length<1){
            document.querySelector("#result" + question.id).innerHTML ='<h2 style="color:red">Please enter a valid answer.</h2>'
        }else {
        submit()
        }
    }
    const submit = async () => {

        const s = {
            "email": document.getElementById('email'+question.id).value,
            "answer": document.getElementById('answer'+question.id).value,
            "question": question.id
        }

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(s)
        };

        let fetchResponse = await fetch(`https://core.carletoncomputersciencesociety.ca/api/codechallenges/submissions/`, settings);
        let data = await fetchResponse.json();
        console.log(data)
        console.log(data.data)
        if (data.errors.length > 1) {
            document.querySelector("#result" + question.id).innerHTML ='<h2 style="color:red">'+data.errors+'</h2>'
        } else if (data.data.correct){
            document.querySelector("#result" + question.id).innerHTML ='<h2 style="color:green">That Answer is Correct!</h2>'
        }else{
            document.querySelector("#result" + question.id).innerHTML ='<h2 style="color:red">That Answer is incorrect.</h2>'
        }
    }
</script>
<Navbar/>
{#if question.detail !== "Not found." && question.id !== -1 && expired == false}
<main>
    <div id="question">
        <MainQuestion question={question}/>
    </div>
    <div id="inputArea">
        <div id={"result"+question.id}></div>
        <Input id={"email"+question.id} placeholder="Enter your Carleton email here..."/>
        <Input id={"answer"+question.id} placeholder="Enter your answer here..."/>
        <div on:click={submitValidation}><Button label="Submit"/></div>
    </div>
</main>
{:else}
<div id="question2">
    Question is not Available.
</div>
{/if}
<Footer/>

<style>
    #question{
        display: flex;
        justify-content: center;
        min-height: 20rem;
    }

    h2 {
        margin-bottom: 3rem;
    }

    #question2 {
        display: flex;
        justify-content: center;
        min-height: 100vh;
    }
    #inputArea{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 4rem;
        margin-top: 2rem;
        padding-bottom: 4rem;
    }
    main{
        width: 100%;
        margin: 2rem auto;
        max-width: 1150px;
        min-height: 100vh;
        /*box-shadow: 0 4px 12px -4px rgb(0 0 0 / 20%);*/
    }
</style>
