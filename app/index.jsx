import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout,IconRegistry, Input } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
export default function Index() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <IconRegistry icons={EvaIconsPack} />
      
    <Layout style={{flex:1}}>
        <Layout style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <Input
          status='basic'
          placeholder='Email'
          />
        </Layout>
    </Layout>
      
    </ApplicationProvider>
  );
}