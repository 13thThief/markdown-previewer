import React from 'react';
import marked from 'marked';
import createDOMPurify from 'dompurify';

import './App.css';
import defaultMarkdown from './defaultMarkdown';

// For sanitization
const DOMPurify = createDOMPurify(window);

// Interprets carriage returns and renders them as br (line break) elements.
marked.setOptions({
  breaks: true
});

// Render links with target and rel
const renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
  return `<a target="_blank" rel="noopener noreferrer" href="${href}">${text}</a>`;
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='editor-container'>
        <div className='title'>Editor</div>
        <textarea
          id='editor'
          placeholder='Mark it down!'
          value={this.props.input}
          tabIndex='0'
          autoFocus
          onChange={this.props.onHandleChange}
        ></textarea>
      </div>
    );
  }
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  createMarkup = () => {
    return { __html: marked(this.props.input, { renderer: renderer }) };
  };

  render() {
    let markdown = this.createMarkup();
    let __html = DOMPurify.sanitize(markdown.__html);
    let markup = { __html };
    return (
      <div className='preview-container'>
        <div className='title'>Preview</div>
        <div id='preview' dangerouslySetInnerHTML={markup} />
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultMarkdown
    };
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  componentDidMount() {
    const script = document.createElement('script');
    script.src =
      'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className='container'>
        <Editor onHandleChange={this.handleChange} input={this.state.input} />
        <Preview input={this.state.input} />
      </div>
    );
  }
}

export default App;
