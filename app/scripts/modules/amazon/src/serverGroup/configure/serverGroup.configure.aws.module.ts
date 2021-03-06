import { module } from 'angular';

import { AZ_REBALANCE_SELECTOR } from './wizard/zones/azRebalanceSelector.component';
import { CAPACITY_SELECTOR } from './wizard/capacity/capacitySelector.component';
import { LOAD_BALANCER_SELECTOR } from './wizard/loadBalancers/loadBalancerSelector.component';
import { SECURITY_GROUPS_REMOVED } from './wizard/securityGroups/securityGroupsRemoved.component';

import { AWS_SERVER_GROUP_TRANSFORMER } from 'amazon/serverGroup/serverGroup.transformer';

export const SERVER_GROUP_CONFIGURE_MODULE = 'spinnaker.amazon.serverGroup.configure.module';
module(SERVER_GROUP_CONFIGURE_MODULE, [
  AWS_SERVER_GROUP_TRANSFORMER,
  AZ_REBALANCE_SELECTOR,
  CAPACITY_SELECTOR,
  LOAD_BALANCER_SELECTOR,
  SECURITY_GROUPS_REMOVED,
  require('./wizard/location/ServerGroupBasicSettings.controller.js').name,
  require('./wizard/securityGroups/securityGroupSelector.directive.js').name,
  require('./wizard/zones/availabilityZoneSelector.directive.js').name,
  require('./wizard/advancedSettings/advancedSettings.component.js').name,
]);
