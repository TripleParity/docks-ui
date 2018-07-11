/**
 * Stub service used when something is wrong
 * with docks-api during testing; Can perhaps be
 * used for unit tests.
 */
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {catchError, map} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

import {Service, Task} from '../../_models';


/*
    This service will be used for testing, for instance
    the json returned from the backend will always be the same
    structure.

    This service should be used to test parsing of that json
    and perhaps display of components. We could also use this for demos.

 */

@Injectable()
export class MockService {
    public myTasks: Task[] = [];

    /**
     * Returns a log associated with some object.
     * Probably one blessed by the Inquisition.
     *
     * The Emperor protects.
     * @param {string} id
     * @returns {Observable<string>}
     */
    public getLog(id: string): Observable<string> {
        return Observable.create((obvs) => {
            obvs.next('Some Really\n\n\nunordered\nstring of things and blah blah' +
                '\n       Alos here is the ID\n\n\n                   ' + id);
        });
    }

    /**
     * Returns a dummy service inspection.
     *
     * @param {string} id
     * @returns {Observable<JSON>}
     */
    public inspectService(id: string): Observable<JSON> {
        /* tslint:disable */
        const temp = JSON.parse('{ "Name": "hopeful_cori", "TaskTemplate": {}, "Mode": { "Replicated": { "Replicas": 1 } }, "UpdateConfig": {}, "RollbackConfig": {}, "EndpointSpec": { "Mode": "dnsrr", "Ports": [] } }');
        /* tslint:enable */
        return Observable.create(obvs => {
            obvs.next(temp);
        });
    }

    /**
     * Returns a dummy service log.
     *
     * @param {string} id
     * @returns {Observable<JSON>}
     */
    public getServiceLog(id: string): Observable<JSON> {
        const temp = 'This is the log';
        return Observable.create(obvs => {
            obvs.next(temp);
        });
    }

    /**
     * Returns a dummy task.
     *
     * @returns {Observable<Task[]>}
     */
    public getTasks(): Observable<Task[]> {
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_core",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnzenvg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnzenvg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnzenvg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnzenvg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "1yljwbmlr8er2waf8orvqpwms",' +
            '"Version": {},"CreatedAt": "2016-06-07T21:07:30.019104782Z",' +
            ' "UpdatedAt": "2016-06-07T21:07:30.231958098Z","Name": "hopeful_cori",' +
            '"Spec": {  "ContainerSpec" : { "Image" : "Not Redis" } },"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz","Slot": 1,' +
            '"NodeID": "60gvrl6tm78dmak4yl7srz94v", "Status": {"Timestamp": "2016-06-07T21:07:30.202183143Z",' +
            '"State": "shutdown", "Message": "shutdown",' +
            '"ContainerStatus": { "ContainerID": "1cf8d63d18e79668b0004a4be4c6ee58cddfad2dae29506d8781581d0688a213"' +
            '}},"DesiredState": "shutdown", "NetworksAttachments": []}'));
        this.myTasks.push(JSON.parse('{"ID": "0kzzo1i0y4jz6027t0k7aezc7","Version": {},' +
            '"CreatedAt": "2016-06-07T21:07:31.171892745Z",' +
            '"UpdatedAt": "2016-06-07T21:07:31.376370513Z","Spec": { "ContainerSpec" : { "Image" : "redis" } },' +
            '"ServiceID": "9mnpnznevg8p8tdbtq4wvbkcz",' +
            '"Slot": 1,"NodeID": "60gvrl6tm78dmak4yl7srz94v","Status": {' +
            '"Timestamp": "2016-06-07T21:07:31.290032978Z", "State": "running",' +
            '"Message": "started","ContainerStatus": {' +
            '"ContainerID": "e5d62702a1b48d01c3e02ca1e0212a250801fa8d67caca0b6f35919ebc12f035",' +
            '"PID": 677} },"DesiredState": "running","NetworksAttachments": []}'));
        return Observable.create((obvs) => {
            obvs.next(this.myTasks);
        });
    }


    public getServices(): Observable<Service[]> {
        const services: JSON[] = [];
        /* tslint:disable */
        const json = `[{"ID":"9mnpnzenvg8p8tdbtq4wvbkcz","Version":{"Index":19},"CreatedAt":"2016-06-07T21:05:51.880065305Z","UpdatedAt":"2016-06-07T21:07:29.962229872Z","Spec":{"Name":"hopeful_cori","TaskTemplate":{"ContainerSpec":{"Image":"redis"},"Resources":{"Limits":{},"Reservations":{}},"RestartPolicy":{"Condition":"any","MaxAttempts":0},"Placement":{},"ForceUpdate":0},"Mode":{"Replicated":{"Replicas":1}},"UpdateConfig":{"Parallelism":1,"Delay":1000000000,"FailureAction":"pause","Monitor":15000000000,"MaxFailureRatio":0.15},"RollbackConfig":{"Parallelism":1,"Delay":1000000000,"FailureAction":"pause","Monitor":15000000000,"MaxFailureRatio":0.15},"EndpointSpec":{"Mode":"vip","Ports":[{"Protocol":"tcp","TargetPort":6379,"PublishedPort":30001}]}},"Endpoint":{"Spec":{"Mode":"vip","Ports":[{"Protocol":"tcp","TargetPort":6379,"PublishedPort":30001}]},"Ports":[{"Protocol":"tcp","TargetPort":6379,"PublishedPort":30001}],"VirtualIPs":[{"NetworkID":"4qvuz4ko70xaltuqbt8956gd1","Addr":"10.255.0.2/16"},{"NetworkID":"4qvuz4ko70xaltuqbt8956gd1","Addr":"10.255.0.3/16"}]}}]`;
        /* tslint:enable */
        services.push(JSON.parse(json)[0]);
        return Observable.create(obvs => {
            obvs.next(services);
        });
    }
}
