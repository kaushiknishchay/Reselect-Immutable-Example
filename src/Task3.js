import React from 'react';
import axios from 'axios';


const apiKey = "fcad1af9a4064741b94070a34565fe19";
const sourcesUrl = "https://newsapi.org/v2/sources?apiKey=" + apiKey;
const catBasedSources = "https://newsapi.org/v2/sources?apiKey=" + apiKey + "&category=";
const newsUrl = "https://newsapi.org/v2/top-headlines?apiKey="+apiKey+"&sources=";



export default class Task3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            selectedCategory: null,
            currentSources: [],
            selectedSource: null,
            sourceNews: []

        };

        this.getSourcesFromCat = this.getSourcesFromCat.bind(this);
        this.getNews = this.getNews.bind(this);
    }

    componentWillMount() {
        axios.get(sourcesUrl).then(res => {
                if (res.status === 200) {
                    let sources = res.data.sources;
                    const uniqueCat = [...new Set(sources.map(item => item.category))];

                    this.setState({
                        categories: uniqueCat
                    });
                }
                else {

                }
            },
            error => {
                console.log('error', error);
            });
    }

    getSourcesFromCat(e) {

        let cat = e.target.value;
        if (cat !== "") {
            axios
                .get(catBasedSources + cat)
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        currentSources: res.data.sources
                    });

                }, error => {
                    console.log(error);
                });

            this.setState({
                selectedCategory: cat
            });
        }
    }

    getNews(e){
        let source = e.target.value;

        if(source!==""){
            axios.get(newsUrl+source).then(res=>{
                    console.log(res.data);
                    this.setState({
                        selectedSource: source,
                        sourceNews: res.data.articles
                    })
                },
                error=>{

                });
        }
    }

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="categories">Categories: </label>
                    <select name="categories" defaultValue={""} onChange={this.getSourcesFromCat}>
                        <option value="">--Select--</option>
                        {
                            this.state.categories.map((cat, idx) => {
                                return (
                                    <option key={cat} value={cat}>{cat}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <br/>

                {
                    this.state.selectedCategory &&
                    <div>
                        <label htmlFor="sources">Sources: </label>
                        <select name="sources" onChange={this.getNews}>
                            <option value="">--Select--</option>
                            {
                                this.state.currentSources.map(val=>{
                                    return(<option key={val.id} value={val.id}>{val.name}</option>)
                                })
                            }
                        </select>
                    </div>
                }

                {
                    this.state.selectedSource
                }
            </div>
        );
    }
}