import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="searchInput" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input name="searchInput" type="text" />
        </label>
      </div>
    );
  }
}

export default Home;