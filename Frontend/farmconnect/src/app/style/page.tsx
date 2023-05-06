import React from 'react';

const StylePage: React.FunctionComponent = () => {
  return (
    <div className="page content-container">
      <div className="page__header">
        <h1 className="page__title">Style Guide</h1>
      </div>
      <div className="page__content">
        <h2>Typography</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quod voluptatem voluptas quos
          exercitationem quas voluptate quidem doloribus. Quisquam voluptatum,
          quibusdam, quia, quod voluptatem voluptas quos exercitationem quas
          voluptate quidem doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quod voluptatem voluptas quos
          exercitationem quas voluptate quidem doloribus. Quisquam voluptatum,
          quibusdam, quia, quod voluptatem voluptas quos exercitationem quas
          voluptate quidem doloribus.
        </p>
        <div className={'col'}>
          <h2>Buttons</h2>
          <div className="row row_margin_s">
            <button className="button">Button</button>
            <button className="button button--primary">Button</button>
            <button className="button button--secondary">Button</button>
            <button className="button button--danger">Button</button>
          </div>
          <div className="row row_margin_s">
            <button className="button button--icon">
              <svg
                className="button--icon-i"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>editIcon</title>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#fff"
                  d="M19.7 5.3c-.4-.4-1-.4-1.4 0l-1.8 1.8 2.4 2.4 1.8-1.8c.4-.4.4-1 0-1.4l-1.8-1.8zM16.5 8.5l-9.9 9.9H3v-3.9l9.9-9.9 3.6 3.9z"
                />
              </svg>
            </button>
            <button className="button button--icon button--primary">
              <svg
                className="button--icon-i"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>editIcon</title>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#fff"
                  d="M19.7 5.3c-.4-.4-1-.4-1.4 0l-1.8 1.8 2.4 2.4 1.8-1.8c.4-.4.4-1 0-1.4l-1.8-1.8zM16.5 8.5l-9.9 9.9H3v-3.9l9.9-9.9 3.6 3.9z"
                />
              </svg>
            </button>
            <button className="button button--icon button--secondary">
              <svg
                className="button--icon-i"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>editIcon</title>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#fff"
                  d="M19.7 5.3c-.4-.4-1-.4-1.4 0l-1.8 1.8 2.4 2.4 1.8-1.8c.4-.4.4-1 0-1.4l-1.8-1.8zM16.5 8.5l-9.9 9.9H3v-3.9l9.9-9.9 3.6 3.9z"
                />
              </svg>
            </button>
            <button className="button button--icon button--danger">
              <svg
                className="button--icon-i"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>editIcon</title>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#fff"
                  d="M19.7 5.3c-.4-.4-1-.4-1.4 0l-1.8 1.8 2.4 2.4 1.8-1.8c.4-.4.4-1 0-1.4l-1.8-1.8zM16.5 8.5l-9.9 9.9H3v-3.9l9.9-9.9 3.6 3.9z"
                />
              </svg>
            </button>
          </div>
        </div>
        <h2>Forms</h2>
        <form className="form">
          <div className="form__group">
            <label className="form__label" htmlFor="name">
              Naam:
            </label>
            <input
              className="form__input"
              type="text"
              id="name"
              value={'Jan Jansen'}
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input className="form__input" type="email" id="email" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input className="form__input" type="password" id="password" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="textarea">
              Textarea
            </label>
            <textarea className="form__input" id="textarea" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="select">
              Select
            </label>
            <select className="form__input" id="select">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="checkbox">
              Checkbox
            </label>
            <input className="form__input" type="checkbox" id="checkbox" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="radio">
              Radio
            </label>
            <input className="form__input" type="radio" id="radio" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="file">
              File
            </label>
            <input className="form__input" type="file" id="file" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="date">
              Date
            </label>
            <input className="form__input" type="date" id="date" />
          </div>
        </form>
        <h2>Tables</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1</td>
              <td>Row 1</td>
              <td>Row 1</td>
            </tr>
            <tr>
              <td>Row 2</td>
              <td>Row 2</td>
              <td>Row 2</td>
            </tr>
          </tbody>
        </table>
        <h2>Lists</h2>
        <ul className="list">
          <li className="list__item">Item 1</li>
          <li className="list__item">Item 2</li>
          <li className="list__item">Item 3</li>
        </ul>
        <h2>Buttons</h2>
      </div>
    </div>
  );
};
export default StylePage;
