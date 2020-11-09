import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BaseApi } from './base-api.class';
import { ConfigurationLoader } from "./../core/configuration/configuration-loader.service";
@Injectable({
    providedIn: 'root'
})
export class NewsService extends BaseApi{
    constructor(
        httpClient: HttpClient,
        configurationLoader: ConfigurationLoader,
    ) {
        super(httpClient)
        this.config = configurationLoader.getConfiguration()
        this.setEndpoint(this.config.apiUrl, '/wp/v2/posts')
    }

}