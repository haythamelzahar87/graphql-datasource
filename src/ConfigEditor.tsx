import React from 'react';
import { DataSourcePluginOptionsEditorProps, DataSourceHttpSettings } from '@grafana/ui';
import { MyDataSourceOptions } from './types';

export type Props = DataSourcePluginOptionsEditorProps<MyDataSourceOptions>;
export const ConfigEditor = (props: Props) => {
  const { options, onOptionsChange } = props;

  return <>
    <DataSourceHttpSettings defaultUrl="http://localhost:9999" dataSourceConfig={options} onChange={onOptionsChange} showAccessOptions={true} />;
    </>
};