import React, { Component } from "react";
import axios from "axios";

import IdeazItem from "./ideaz-item";

export default class IdeazContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "These Ideaz are CRAYZEE",
      isLoading: false,
      data: [
        { title: "Biodegradable Bullets", category: "Military", slug: "Bio Bullets" },
        { title: "Solar Sail", category: "Leisure", slug: "Solar Sail" },
        {title: "Electric Snowmobile", category: "Recreation", slug: "Electric Snowmobile"},
      ]
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.getIdeazItems = this.getIdeazItems.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  getIdeazItems() {
    axios
      .get("https://ideaz.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        console.log("response data", response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return (
        <IdeazItem title={item.title} url={"google.com"} slug={item.slug} />
      );
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    this.getIdeazItems();

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("Military")}>
          Military
        </button>
        <button onClick={() => this.handleFilter("Leisure")}>
          Leisure
        </button>
        <button onClick={() => this.handleFilter("Recreation")}>
          Recreation
        </button>

        {this.IdeazItems()}
      </div>
    );
  }
}