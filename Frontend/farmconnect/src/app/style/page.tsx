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
            <button className="button--icon">
              <svg
                className="button--icon-i"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>editIcon</title>
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="#000"
                  d="M19.7 5.3c-.4-.4-1-.4-1.4 0l-1.8 1.8 2.4 2.4 1.8-1.8c.4-.4.4-1 0-1.4l-1.8-1.8zM16.5 8.5l-9.9 9.9H3v-3.9l9.9-9.9 3.6 3.9z"
                />
              </svg>
            </button>
            <button className="button--icon button--primary">
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
            <button className="button--icon button--secondary">
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
            <button className="button--icon button--danger">
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
        <form className="form card">
          <div className="form__group">
            <label className="form__label">Naam:</label>
            <input
              className="form__input"
              type="text"
              id="name"
              defaultValue={'Jan Jansen'}
            />
          </div>
          <div className="form__group">
            <label className="form__label">Email</label>
            <input className="form__input" type="email" id="email" />
          </div>
          <div className="form__group">
            <label className="form__label">Password</label>
            <input className="form__input" type="password" id="password" />
          </div>
          <div className="form__group">
            <label className="form__label">Textarea</label>
            <textarea className="form__input" id="textarea" />
          </div>
          <div className="form__group">
            <label className="form__label">Select</label>
            <select className="form__input form__input_select" id="select">
              <option className={'form__input_select_option'} value="1">
                Option 1
              </option>
              <option className={'form__input_select_option'} value="2">
                Option 2
              </option>
            </select>
          </div>
          <div className="form__group">
            <label className="form__label">Checkbox</label>
            <input className="form__input" type="checkbox" id="checkbox" />
          </div>
          <div className="form__group">
            <label className="form__label">Radio</label>
            <input className="form__input" type="radio" id="radio" />
          </div>
          <div className="form__group">
            <label className="form__label">File</label>
            <input className="form__input" type="file" id="file" />
          </div>
          <div className="form__group">
            <label className="form__label">Date</label>
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
        <h2>Cards</h2>
        <div className={'row'}>
          <div className="card card--small margin_s">
            <div className="card__header">
              <h3 className="card__title">card-small without image</h3>
            </div>
            <div className="card__body">
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, voluptates quod quos
                voluptatem
              </p>
            </div>
            <div className="card__footer">
              <button className="button button--primary">Button</button>
            </div>
          </div>
          <div className="card card--small margin_s">
            <div className="card__header">
              <img
                className={'card__header__image'}
                src={'farm_placeholder.png'}
                alt={''}
              ></img>
              <h3 className="card__title">card-small with image</h3>
            </div>
            <div className="card__body">
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, voluptates quod quos
                voluptatem
              </p>
            </div>
            <div className="card__footer">
              <button className="button button--primary">Button</button>
            </div>
          </div>
          <div className="card-full-width card--small margin_s">
            <div className="card__header">
              <img
                className={'card__header__image-full-width'}
                src={'farm_placeholder.png'}
                alt={''}
              ></img>
            </div>
            <div className="card__body">
              <h3 className="card__title">card-small with full-width image</h3>
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, voluptates quod quos
                voluptatem
              </p>
              <div className="card__footer">
                <button className="button button--primary">Button</button>
              </div>
            </div>
          </div>
          <div className="card card--medium margin_s">
            <div className="card__header">
              <h3 className="card__title">card-medium without image</h3>
            </div>
            <div className="card__body">
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, voluptates quod quos
                voluptatem
              </p>
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, voluptates quod quos
                voluptatem
              </p>
            </div>
            <div className="card__footer">
              <button className="button button--primary">Button</button>
            </div>
          </div>
          <div className="card card--medium margin_s">
            <div className="card__header">
              <img
                className={'card__header__image'}
                src={'farm_placeholder.png'}
                alt={''}
              ></img>
              <h3 className="card__title">card-medium with image</h3>
            </div>
            <div className="card__body">
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, voluptates quod quos
                voluptatem
              </p>
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, voluptates quod quos
                voluptatem
              </p>
            </div>
            <div className="card__footer">
              <button className="button button--primary">Button</button>
            </div>
          </div>
          <div className="card-full-width card--medium margin_s">
            <div className="card__header">
              <img
                className={'card__header__image-full-width'}
                src={'farm_placeholder.png'}
                alt={''}
              ></img>
            </div>
            <div className="card__body">
              <h3 className="card__title">card-medium with full-width image</h3>
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, voluptates quod quos
                voluptatem
              </p>
              <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, voluptates quod quos
                voluptatem
              </p>
            </div>
            <div className="card__footer">
              <button className="button button--primary">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StylePage;
