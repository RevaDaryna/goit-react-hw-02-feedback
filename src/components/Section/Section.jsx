import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
    return (
      <section className={css.section}>
        <h2 className={css.sectionTitle}>{title}</h2>
        {children}
      </section>
    );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export {Section}