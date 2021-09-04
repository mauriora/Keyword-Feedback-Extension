import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer, PlaceholderName } from '@microsoft/sp-application-base';
import * as Controller from '@mauriora/controller-sharepoint-list';

import KeywordFeedback from './components/KeywordFeedback';
import { configure } from 'mobx';

export const QUALIFIED_NAME = 'Extension.ApplicationCustomizer.RateableAnnouncements';

export interface IRateableAnnouncementsExtensionProperties {
    siteUrl: string;
    listName: string;
}

/**
 * Mobx Configuration
 */
 configure({
    enforceActions: "never"
  });  

export default class KeywordFeedbackExtension
    extends BaseApplicationCustomizer<IRateableAnnouncementsExtensionProperties> {

    protected async onInit(): Promise<void> {
        console.log(`${this.context.manifest.alias} [${this.context.manifest.id}] version=${this.context.manifest.version} onInit super.onInit...`, { context: this.context, properties: this.properties });
        super.onInit();
        console.log(`${this.context.manifest.alias} [${this.context.manifest.id}] version=${this.context.manifest.version} onInit await Controller.init...`, { context: this.context, properties: this.properties });

        await Controller.init(this.context);

        console.log(`${this.context.manifest.alias} [${this.context.manifest.id}] version=${this.context.manifest.version} onInit`, {propertiesDeconstructed: {...this.properties}, properties: this.properties, context: this.context, contextDeconstructed: {...this.context}});


        if (!this.properties.siteUrl || !this.properties.listName) {
            const e: Error = new Error('Missing required configuration parameters');
            Log.error(QUALIFIED_NAME, e);
            return Promise.reject(e);
        }
        const header = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);

        if (!header) {
            const error = new Error('Could not find placeholder Top');
            Log.error(QUALIFIED_NAME, error);
            return Promise.reject(error);
        }

        let site = this.context.pageContext.site;
        let tenantUrl = site.absoluteUrl.replace(site.serverRelativeUrl, "");

        const elem: React.ReactElement = React.createElement(KeywordFeedback, { 
            siteUrl: `${tenantUrl}${this.properties.siteUrl}`, 
            listName: this.properties.listName
         });

        ReactDOM.render(elem, header.domElement);

        console.log(`${this.context.manifest.alias} [${this.context.manifest.id}] version=${this.context.manifest.version} onInit finished`, {propertiesDeconstructed: {...this.properties}, properties: this.properties, context: this.context, contextDeconstructed: {...this.context}});

        return Promise.resolve<void>();
    }
}
