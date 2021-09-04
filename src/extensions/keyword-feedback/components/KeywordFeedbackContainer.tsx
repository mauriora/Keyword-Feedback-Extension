import * as React from 'react';
import { FunctionComponent } from 'react';
import { IKeywordFeedbackProps } from './IKeywordFeedbackProps';
import { Stack } from '@fluentui/react';
import { ErrorBoundary } from '@mauriora/utils-spfx-controls-react';
import { KeywordFeedbackForm } from './KeywordFeedbackForm';


const KeywordFeedbackContainer: FunctionComponent<IKeywordFeedbackProps> = ({ listName, siteUrl }) => {
    console.log(`KeywordFeedbackContainer`, { listName, siteUrl });

    return <Stack>
        <ErrorBoundary>
            <KeywordFeedbackForm
                siteUrl={siteUrl}
                listId={listName}
            />
        </ErrorBoundary>
    </Stack>;
};

export default KeywordFeedbackContainer;