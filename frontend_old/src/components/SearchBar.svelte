<script lang="ts">
    // import {onMount} from 'svelte';
    // import {search} from '../utils/api';
    import {FloatingLabelInput, Input} from 'flowbite-svelte';
    // import Select from 'svelte-select'
    import MultiSelect from 'svelte-multiselect';
    import FloatingMultiSelect from "./FloatingMultiSelect.svelte";
    // let searchResults = [];
    // let searchValue = '';

    // async function handleSearch() {
    //     if (searchValue) {
    //         searchResults = await search(searchValue);
    //     } else {
    //         searchResults = [];
    //     }
    // }
    //
    // $: console.log(searchResults);
    //
    // onMount(() => {
    //     // Set focus to the search input on page load
    //     const searchInput = document.getElementById('search-input');
    //     if (searchInput) searchInput.focus();
    // });

    const items = [
        {value: 'one', label: 'One'},
        {value: 'two', label: 'Two'},
        {value: 'three', label: 'Three'},
        {value: 'four', label: 'Four'},
        {value: 'five', label: 'Five'},
        {value: 'six', label: 'Six'},
    ];

    let value;
    let selectedOptions = [];

</script>


<div class="flex flex-column items-center justify-center w-full h-full">
<!--    <div class="w-10/12 p-2 bg-gray-300 border-blue-300 rounded-lg flex flex-wrap">-->
        <Input id="search"
               class="w-full"
               placeholder="Search for hotels..."
        ></Input>
        <!--                <Select {items} multiple bind:value>-->
        <!--        &lt;!&ndash;            <div class="empty" slot="empty">No options</div>&ndash;&gt;-->
        <!--                </Select>-->

<!--        <div class="w-1/2 bg-gray-50 rounded-lg border-black">-->
<!--            <label class="floating-label" class:active={selectedOptions.length}>-->
<!--                Select Options-->
<!--            </label>-->
<!--            <MultiSelect-->
<!--                    id="departure"-->
<!--                    options={items}-->
<!--                    bind:selectedOptions-->
<!--            />-->
<!--        </div>-->
<!--        <FloatingMultiSelect-->
        <!--                id="departure"-->
        <!--                options={items}-->
        <!--                bind:selectedOptions-->
        <!--                />-->
        <FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Floating outlined" />
<!--        <div class="w-1/2 bg-gray-50 rounded-lg border-black">-->
<!--            <MultiSelect-->
<!--                    id="arrival"-->
<!--                    options={items}-->
<!--                    selected={[`one`]}-->
<!--            />-->
<!--        </div>-->

<!--    </div>-->


    <!--{#if searchResults.length > 0}-->
    <!--    <div class="search-results flex flex-colum items-center">-->
    <!--        {#each searchResults as result}-->
    <!--            <div class="result">{result.title}</div>-->
    <!--        {/each}-->
    <!--    </div>-->
    <!--{/if}-->
</div>
