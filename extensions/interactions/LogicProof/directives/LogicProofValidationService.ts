// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Validator service for the interaction.
 */

import { downgradeInjectable } from '@angular/upgrade/static';
import { Injectable } from '@angular/core';

import { AnswerGroup } from
  'domain/exploration/AnswerGroupObjectFactory';
import { IWarning, baseInteractionValidationService } from
  'interactions/baseInteractionValidationService';
import { Outcome } from
  'domain/exploration/OutcomeObjectFactory';

@Injectable({
  providedIn: 'root'
})
export class LogicProofValidationService {
  constructor(
      private baseInteractionValidationServiceInstance:
        baseInteractionValidationService) {}

  // TODO(#7176): Replace 'any' with the exact type. This has been kept as
  // 'any' because 'customizationArgs' is a dict with possible underscore_cased
  // keys which give tslint errors against underscore_casing in favor of
  // camelCasing.
  getCustomizationArgsWarnings(customizationArgs: any): any[] {
    // TODO(juansaba): Implement customization args validations.
    return [];
  }

  getAllWarnings(
      stateName: string, customizationArgs: any, answerGroups: AnswerGroup[],
      defaultOutcome: Outcome): IWarning[] {
    // We do not require a default rule for this interaction, since the
    // feedback is mostly provided from within the interaction itself.
    return this.getCustomizationArgsWarnings(customizationArgs).concat(
      this.baseInteractionValidationServiceInstance.getAnswerGroupWarnings(
        answerGroups, stateName));
  }
}

angular.module('oppia').factory(
  'LogicProofValidationService',
  downgradeInjectable(LogicProofValidationService));
