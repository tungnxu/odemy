import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Configuration } from '../core/configuration/configuration.model'

export abstract class BaseApi {
    protected baseUrl: string
    protected config: Configuration

    constructor(protected httpClient: HttpClient) { }

    protected setEndpoint(hostUrl: string, endpoint: string) {
        if (endpoint.startsWith('/')) {
            endpoint = endpoint.replace(/^\/+/, '')
        }
        if (endpoint.endsWith('/')) {
            endpoint = endpoint.replace(/\/+$/, '')
        }
        if (hostUrl.endsWith('/')) {
            hostUrl = hostUrl.replace(/\/+$/, '')
        }
        this.baseUrl = `${hostUrl}/${endpoint}`
    }

    protected createParams(params: { [key: string]: any }): HttpParams {
        return Object.keys(params).reduce((m, k) => {
            if (params[k] != null) {
                return m.set(k, params[k].toString())
            }
            return m
        }, new HttpParams())
    }

    protected createUrl(url: string, upgrade: boolean = false) {
        if (!url.startsWith('/')) {
            url = '/' + url
        }
        return this.baseUrl.replace('/v1/', upgrade ? '/v2/' : '/v1/') + url
    }
   
}