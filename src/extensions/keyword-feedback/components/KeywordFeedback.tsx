import * as React from 'react';
import { IKeywordFeedbackProps } from './IKeywordFeedbackProps';
import KeywordFeedbackContainer from './KeywordFeedbackContainer';
import * as strings from 'KeywordFeedbackStrings';
import { Label } from '@fluentui/react';

export default class KeywordFeedback extends React.Component<IKeywordFeedbackProps, {}> {
  public render(): React.ReactElement<IKeywordFeedbackProps> {
    const configured = (this.props.listName) && (this.props.siteUrl);

      console.log(`KeywordFeedback.render() configured=${configured}`, { props: this.props });

    if (configured) {
      return (
          <KeywordFeedbackContainer 
            siteUrl={this.props.siteUrl}
            listName={this.props.listName}
          />
      );
    } else {
      return (
        <Label>{strings.PleaseConfigureWebPart}</Label>
      );
    }
  }
}
