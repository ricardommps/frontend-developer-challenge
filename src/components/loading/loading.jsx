import React from 'react';
import PropTypes from 'prop-types';

import './loading.scss';

export const GlobalLoading = () => (
  <div className="global-loading global-loading--fullpage global-loading--fullpage--show [spinner--is_hide]">
    <div className="loading">
      <div className="loading__circle circle  loading--large" />
      <div className="loading__label label x-hidden-focus">Carregando...</div>
      <div role="status" aria-live="assertive">
        <div className="screenReaderOnly">Carregando...</div>
      </div>
    </div>
  </div>
);

export const Loading = ({ label }) => (
  <div className="loading">
    <div className="loading__circle circle  loading--large  [loading--xSmall] [loading--small] [loading--medium] [spinner--large]" />
    <div className="loading__label label x-hidden-focus">
      {label}
    </div>
    <div role="status" aria-live="assertive">
      <div id="loadingStatus" className="screenReaderOnly">
        {label}
      </div>
    </div>
  </div>
);

Loading.defaultProps = { label: '' };
Loading.propTypes = { label: PropTypes.string };

export const FillLoading = ({ label }) => (
  <div className="fill-loading">
    <Loading label={label} />
  </div>
);

FillLoading.defaultProps = { label: '' };
FillLoading.propTypes = { label: PropTypes.string };

export const LoadFailed = ({ failedLabel }) => (
  <div className="failed-loading">
    <span className="icon icon-falha" />
    <span className="failed-loading__title">
      <strong>{failedLabel}</strong>.
    </span>
    <span className="failed-loading__subtitle">
      Aguarde alguns instantes e tente novamente.
    </span>
  </div>
);

LoadFailed.defaultProps = { failedLabel: null };
LoadFailed.propTypes = { failedLabel: PropTypes.string };
