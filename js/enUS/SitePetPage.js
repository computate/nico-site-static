
// PUTImport //

async function putimportSitePet($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSitePetVals(JSON.parse(json), success, error);
}

function putimportSitePetVals(json, success, error) {
	$.ajax({
		url: '/api/pet/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// POST //

async function postSitePet($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived == 'true';

	var valueDeleted = $formValues.find('.valueDeleted').val();
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted == 'true';

	var valuePetName = $formValues.find('.valuePetName').val();
	if(valuePetName != null && valuePetName !== '')
		vals['petName'] = valuePetName;

	var valuePetFoodAmount = $formValues.find('.valuePetFoodAmount').val();
	if(valuePetFoodAmount != null && valuePetFoodAmount !== '')
		vals['petFoodAmount'] = valuePetFoodAmount;

	var valueEnrollmentKeys = $formValues.find('.valueEnrollmentKeys').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valuePetFood = $formValues.find('.valuePetFood').val();
	if(valuePetFood != null && valuePetFood !== '')
		vals['petFood'] = valuePetFood;

	var valuePetSick = $formValues.find('.valuePetSick').val();
	if(valuePetSick != null && valuePetSick !== '')
		vals['petSick'] = valuePetSick == 'true';

	var valuePetMedNote = $formValues.find('.valuePetMedNote').val();
	if(valuePetMedNote != null && valuePetMedNote !== '')
		vals['petMedNote'] = valuePetMedNote;

	var valuePetTrouble = $formValues.find('.valuePetTrouble').val();
	if(valuePetTrouble != null && valuePetTrouble !== '')
		vals['petTrouble'] = valuePetTrouble;

	var valueSendpdates = $formValues.find('.valueSendpdates').val();
	if(valueSendpdates != null && valueSendpdates !== '')
		vals['sendpdates'] = valueSendpdates == 'true';

	var valuePetAmount = $formValues.find('.valuePetAmount').val();
	if(valuePetAmount != null && valuePetAmount !== '')
		vals['petAmount'] = valuePetAmount;

	var valueUserKeys = $formValues.find('.valueUserKeys').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['userKeys'] = valueUserKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/pet'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSitePetVals(vals, success, error) {
	$.ajax({
		url: '/api/pet'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSitePet($formFilters, $formValues, pk, success, error) {
	var filters = patchSitePetFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').val();
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').val();
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valuePetName = $formValues.find('.valuePetName').val();
	var removePetName = $formValues.find('.removePetName').val() === 'true';
	var setPetName = removePetName ? null : $formValues.find('.setPetName').val();
	var addPetName = $formValues.find('.addPetName').val();
	if(removePetName || setPetName != null && setPetName !== '')
		vals['setPetName'] = setPetName;
	if(addPetName != null && addPetName !== '')
		vals['addPetName'] = addPetName;
	var removePetName = $formValues.find('.removePetName').val();
	if(removePetName != null && removePetName !== '')
		vals['removePetName'] = removePetName;

	var valuePetFoodAmount = $formValues.find('.valuePetFoodAmount').val();
	var removePetFoodAmount = $formValues.find('.removePetFoodAmount').val() === 'true';
	var setPetFoodAmount = removePetFoodAmount ? null : $formValues.find('.setPetFoodAmount').val();
	var addPetFoodAmount = $formValues.find('.addPetFoodAmount').val();
	if(removePetFoodAmount || setPetFoodAmount != null && setPetFoodAmount !== '')
		vals['setPetFoodAmount'] = setPetFoodAmount;
	if(addPetFoodAmount != null && addPetFoodAmount !== '')
		vals['addPetFoodAmount'] = addPetFoodAmount;
	var removePetFoodAmount = $formValues.find('.removePetFoodAmount').val();
	if(removePetFoodAmount != null && removePetFoodAmount !== '')
		vals['removePetFoodAmount'] = removePetFoodAmount;

	var valueEnrollmentKeys = $formValues.find('.valueEnrollmentKeys').val();
	var removeEnrollmentKeys = $formValues.find('.removeEnrollmentKeys').val() === 'true';
	var setEnrollmentKeys = removeEnrollmentKeys ? null : $formValues.find('.setEnrollmentKeys').val();
	var addEnrollmentKeys = $formValues.find('.addEnrollmentKeys').val();
	if(removeEnrollmentKeys || setEnrollmentKeys != null && setEnrollmentKeys !== '')
		vals['setEnrollmentKeys'] = setEnrollmentKeys;
	if(addEnrollmentKeys != null && addEnrollmentKeys !== '')
		vals['addEnrollmentKeys'] = addEnrollmentKeys;
	var removeEnrollmentKeys = $formValues.find('.removeEnrollmentKeys').val();
	if(removeEnrollmentKeys != null && removeEnrollmentKeys !== '')
		vals['removeEnrollmentKeys'] = removeEnrollmentKeys;

	var valuePetFood = $formValues.find('.valuePetFood').val();
	var removePetFood = $formValues.find('.removePetFood').val() === 'true';
	var setPetFood = removePetFood ? null : $formValues.find('.setPetFood').val();
	var addPetFood = $formValues.find('.addPetFood').val();
	if(removePetFood || setPetFood != null && setPetFood !== '')
		vals['setPetFood'] = setPetFood;
	if(addPetFood != null && addPetFood !== '')
		vals['addPetFood'] = addPetFood;
	var removePetFood = $formValues.find('.removePetFood').val();
	if(removePetFood != null && removePetFood !== '')
		vals['removePetFood'] = removePetFood;

	var valuePetSick = $formValues.find('.valuePetSick').val();
	var removePetSick = $formValues.find('.removePetSick').val() === 'true';
	var valuePetSickSelectVal = $formValues.find('select.setPetSick').val();
	var valuePetSick = null;
	if(valuePetSickSelectVal != null && valuePetSickSelectVal !== '')
		valuePetSick = valuePetSickSelectVal == 'true';
	var setPetSick = removePetSick ? null : valuePetSick;
	var addPetSick = $formValues.find('.addPetSick').prop('checked');
	if(removePetSick || setPetSick != null && setPetSick !== '')
		vals['setPetSick'] = setPetSick;
	if(addPetSick != null && addPetSick !== '')
		vals['addPetSick'] = addPetSick;
	var removePetSick = $formValues.find('.removePetSick').prop('checked');
	if(removePetSick != null && removePetSick !== '')
		vals['removePetSick'] = removePetSick;

	var valuePetMedNote = $formValues.find('.valuePetMedNote').val();
	var removePetMedNote = $formValues.find('.removePetMedNote').val() === 'true';
	var setPetMedNote = removePetMedNote ? null : $formValues.find('.setPetMedNote').val();
	var addPetMedNote = $formValues.find('.addPetMedNote').val();
	if(removePetMedNote || setPetMedNote != null && setPetMedNote !== '')
		vals['setPetMedNote'] = setPetMedNote;
	if(addPetMedNote != null && addPetMedNote !== '')
		vals['addPetMedNote'] = addPetMedNote;
	var removePetMedNote = $formValues.find('.removePetMedNote').val();
	if(removePetMedNote != null && removePetMedNote !== '')
		vals['removePetMedNote'] = removePetMedNote;

	var valuePetTrouble = $formValues.find('.valuePetTrouble').val();
	var removePetTrouble = $formValues.find('.removePetTrouble').val() === 'true';
	var setPetTrouble = removePetTrouble ? null : $formValues.find('.setPetTrouble').val();
	var addPetTrouble = $formValues.find('.addPetTrouble').val();
	if(removePetTrouble || setPetTrouble != null && setPetTrouble !== '')
		vals['setPetTrouble'] = setPetTrouble;
	if(addPetTrouble != null && addPetTrouble !== '')
		vals['addPetTrouble'] = addPetTrouble;
	var removePetTrouble = $formValues.find('.removePetTrouble').val();
	if(removePetTrouble != null && removePetTrouble !== '')
		vals['removePetTrouble'] = removePetTrouble;

	var valueSendpdates = $formValues.find('.valueSendpdates').val();
	var removeSendpdates = $formValues.find('.removeSendpdates').val() === 'true';
	var valueSendpdatesSelectVal = $formValues.find('select.setSendpdates').val();
	var valueSendpdates = null;
	if(valueSendpdatesSelectVal != null && valueSendpdatesSelectVal !== '')
		valueSendpdates = valueSendpdatesSelectVal == 'true';
	var setSendpdates = removeSendpdates ? null : valueSendpdates;
	var addSendpdates = $formValues.find('.addSendpdates').prop('checked');
	if(removeSendpdates || setSendpdates != null && setSendpdates !== '')
		vals['setSendpdates'] = setSendpdates;
	if(addSendpdates != null && addSendpdates !== '')
		vals['addSendpdates'] = addSendpdates;
	var removeSendpdates = $formValues.find('.removeSendpdates').prop('checked');
	if(removeSendpdates != null && removeSendpdates !== '')
		vals['removeSendpdates'] = removeSendpdates;

	var valuePetAmount = $formValues.find('.valuePetAmount').val();
	var removePetAmount = $formValues.find('.removePetAmount').val() === 'true';
	var setPetAmount = removePetAmount ? null : $formValues.find('.setPetAmount').val();
	var addPetAmount = $formValues.find('.addPetAmount').val();
	if(removePetAmount || setPetAmount != null && setPetAmount !== '')
		vals['setPetAmount'] = setPetAmount;
	if(addPetAmount != null && addPetAmount !== '')
		vals['addPetAmount'] = addPetAmount;
	var removePetAmount = $formValues.find('.removePetAmount').val();
	if(removePetAmount != null && removePetAmount !== '')
		vals['removePetAmount'] = removePetAmount;

	var valueUserKeys = $formValues.find('.valueUserKeys').val();
	var removeUserKeys = $formValues.find('.removeUserKeys').val() === 'true';
	var setUserKeys = removeUserKeys ? null : $formValues.find('.setUserKeys').val();
	var addUserKeys = $formValues.find('.addUserKeys').val();
	if(removeUserKeys || setUserKeys != null && setUserKeys !== '')
		vals['setUserKeys'] = setUserKeys;
	if(addUserKeys != null && addUserKeys !== '')
		vals['addUserKeys'] = addUserKeys;
	var removeUserKeys = $formValues.find('.removeUserKeys').val();
	if(removeUserKeys != null && removeUserKeys !== '')
		vals['removeUserKeys'] = removeUserKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	var addUserId = $formValues.find('.addUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	patchSitePetVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSitePetFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterPetName = $formFilters.find('.valuePetName').val();
		if(filterPetName != null && filterPetName !== '')
			filters.push({ name: 'fq', value: 'petName:' + filterPetName });

		var filterPetFoodAmount = $formFilters.find('.valuePetFoodAmount').val();
		if(filterPetFoodAmount != null && filterPetFoodAmount !== '')
			filters.push({ name: 'fq', value: 'petFoodAmount:' + filterPetFoodAmount });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

		var filterPetFood = $formFilters.find('.valuePetFood').val();
		if(filterPetFood != null && filterPetFood !== '')
			filters.push({ name: 'fq', value: 'petFood:' + filterPetFood });

		var $filterPetSickCheckbox = $formFilters.find('input.valuePetSick[type = "checkbox"]');
		var $filterPetSickSelect = $formFilters.find('select.valuePetSick');
		var filterPetSick = $filterPetSickSelect.length ? $filterPetSickSelect.val() : $filterPetSickCheckbox.prop('checked');
		var filterPetSickSelectVal = $formFilters.find('select.filterPetSick').val();
		var filterPetSick = null;
		if(filterPetSickSelectVal !== '')
			filterPetSick = filterPetSickSelectVal == 'true';
		if(filterPetSick != null && filterPetSick === true)
			filters.push({ name: 'fq', value: 'petSick:' + filterPetSick });

		var filterPetMedNote = $formFilters.find('.valuePetMedNote').val();
		if(filterPetMedNote != null && filterPetMedNote !== '')
			filters.push({ name: 'fq', value: 'petMedNote:' + filterPetMedNote });

		var filterPetTrouble = $formFilters.find('.valuePetTrouble').val();
		if(filterPetTrouble != null && filterPetTrouble !== '')
			filters.push({ name: 'fq', value: 'petTrouble:' + filterPetTrouble });

		var $filterSendpdatesCheckbox = $formFilters.find('input.valueSendpdates[type = "checkbox"]');
		var $filterSendpdatesSelect = $formFilters.find('select.valueSendpdates');
		var filterSendpdates = $filterSendpdatesSelect.length ? $filterSendpdatesSelect.val() : $filterSendpdatesCheckbox.prop('checked');
		var filterSendpdatesSelectVal = $formFilters.find('select.filterSendpdates').val();
		var filterSendpdates = null;
		if(filterSendpdatesSelectVal !== '')
			filterSendpdates = filterSendpdatesSelectVal == 'true';
		if(filterSendpdates != null && filterSendpdates === true)
			filters.push({ name: 'fq', value: 'sendpdates:' + filterSendpdates });

		var filterPetAmount = $formFilters.find('.valuePetAmount').val();
		if(filterPetAmount != null && filterPetAmount !== '')
			filters.push({ name: 'fq', value: 'petAmount:' + filterPetAmount });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPetKey = $formFilters.find('.valuePetKey').val();
		if(filterPetKey != null && filterPetKey !== '')
			filters.push({ name: 'fq', value: 'petKey:' + filterPetKey });
	}
	return filters;
}

function patchSitePetVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSitePetVals(filters, vals, success, error);
}

function patchSitePetVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/pet?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSitePet(pk) {
	$.ajax({
		url: '/api/pet/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSitePet($formFilters, success, error) {
	var filters = searchSitePetFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSitePetVals(filters, success, error);
}

function searchSitePetFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterPetName = $formFilters.find('.valuePetName').val();
		if(filterPetName != null && filterPetName !== '')
			filters.push({ name: 'fq', value: 'petName:' + filterPetName });

		var filterPetFoodAmount = $formFilters.find('.valuePetFoodAmount').val();
		if(filterPetFoodAmount != null && filterPetFoodAmount !== '')
			filters.push({ name: 'fq', value: 'petFoodAmount:' + filterPetFoodAmount });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

		var filterPetFood = $formFilters.find('.valuePetFood').val();
		if(filterPetFood != null && filterPetFood !== '')
			filters.push({ name: 'fq', value: 'petFood:' + filterPetFood });

		var $filterPetSickCheckbox = $formFilters.find('input.valuePetSick[type = "checkbox"]');
		var $filterPetSickSelect = $formFilters.find('select.valuePetSick');
		var filterPetSick = $filterPetSickSelect.length ? $filterPetSickSelect.val() : $filterPetSickCheckbox.prop('checked');
		var filterPetSickSelectVal = $formFilters.find('select.filterPetSick').val();
		var filterPetSick = null;
		if(filterPetSickSelectVal !== '')
			filterPetSick = filterPetSickSelectVal == 'true';
		if(filterPetSick != null && filterPetSick === true)
			filters.push({ name: 'fq', value: 'petSick:' + filterPetSick });

		var filterPetMedNote = $formFilters.find('.valuePetMedNote').val();
		if(filterPetMedNote != null && filterPetMedNote !== '')
			filters.push({ name: 'fq', value: 'petMedNote:' + filterPetMedNote });

		var filterPetTrouble = $formFilters.find('.valuePetTrouble').val();
		if(filterPetTrouble != null && filterPetTrouble !== '')
			filters.push({ name: 'fq', value: 'petTrouble:' + filterPetTrouble });

		var $filterSendpdatesCheckbox = $formFilters.find('input.valueSendpdates[type = "checkbox"]');
		var $filterSendpdatesSelect = $formFilters.find('select.valueSendpdates');
		var filterSendpdates = $filterSendpdatesSelect.length ? $filterSendpdatesSelect.val() : $filterSendpdatesCheckbox.prop('checked');
		var filterSendpdatesSelectVal = $formFilters.find('select.filterSendpdates').val();
		var filterSendpdates = null;
		if(filterSendpdatesSelectVal !== '')
			filterSendpdates = filterSendpdatesSelectVal == 'true';
		if(filterSendpdates != null && filterSendpdates === true)
			filters.push({ name: 'fq', value: 'sendpdates:' + filterSendpdates });

		var filterPetAmount = $formFilters.find('.valuePetAmount').val();
		if(filterPetAmount != null && filterPetAmount !== '')
			filters.push({ name: 'fq', value: 'petAmount:' + filterPetAmount });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPetKey = $formFilters.find('.valuePetKey').val();
		if(filterPetKey != null && filterPetKey !== '')
			filters.push({ name: 'fq', value: 'petKey:' + filterPetKey });
	}
	return filters;
}

function searchSitePetVals(filters, success, error) {

	$.ajax({
		url: '/api/pet?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSitePetObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-dog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSitePetVals($formFilters, success, error);
}

// AdminSearch //

async function adminsearchSitePet($formFilters, success, error) {
	var filters = adminsearchSitePetFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchSitePetVals(filters, success, error);
}

function adminsearchSitePetFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterPetName = $formFilters.find('.valuePetName').val();
		if(filterPetName != null && filterPetName !== '')
			filters.push({ name: 'fq', value: 'petName:' + filterPetName });

		var filterPetFoodAmount = $formFilters.find('.valuePetFoodAmount').val();
		if(filterPetFoodAmount != null && filterPetFoodAmount !== '')
			filters.push({ name: 'fq', value: 'petFoodAmount:' + filterPetFoodAmount });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

		var filterPetFood = $formFilters.find('.valuePetFood').val();
		if(filterPetFood != null && filterPetFood !== '')
			filters.push({ name: 'fq', value: 'petFood:' + filterPetFood });

		var $filterPetSickCheckbox = $formFilters.find('input.valuePetSick[type = "checkbox"]');
		var $filterPetSickSelect = $formFilters.find('select.valuePetSick');
		var filterPetSick = $filterPetSickSelect.length ? $filterPetSickSelect.val() : $filterPetSickCheckbox.prop('checked');
		var filterPetSickSelectVal = $formFilters.find('select.filterPetSick').val();
		var filterPetSick = null;
		if(filterPetSickSelectVal !== '')
			filterPetSick = filterPetSickSelectVal == 'true';
		if(filterPetSick != null && filterPetSick === true)
			filters.push({ name: 'fq', value: 'petSick:' + filterPetSick });

		var filterPetMedNote = $formFilters.find('.valuePetMedNote').val();
		if(filterPetMedNote != null && filterPetMedNote !== '')
			filters.push({ name: 'fq', value: 'petMedNote:' + filterPetMedNote });

		var filterPetTrouble = $formFilters.find('.valuePetTrouble').val();
		if(filterPetTrouble != null && filterPetTrouble !== '')
			filters.push({ name: 'fq', value: 'petTrouble:' + filterPetTrouble });

		var $filterSendpdatesCheckbox = $formFilters.find('input.valueSendpdates[type = "checkbox"]');
		var $filterSendpdatesSelect = $formFilters.find('select.valueSendpdates');
		var filterSendpdates = $filterSendpdatesSelect.length ? $filterSendpdatesSelect.val() : $filterSendpdatesCheckbox.prop('checked');
		var filterSendpdatesSelectVal = $formFilters.find('select.filterSendpdates').val();
		var filterSendpdates = null;
		if(filterSendpdatesSelectVal !== '')
			filterSendpdates = filterSendpdatesSelectVal == 'true';
		if(filterSendpdates != null && filterSendpdates === true)
			filters.push({ name: 'fq', value: 'sendpdates:' + filterSendpdates });

		var filterPetAmount = $formFilters.find('.valuePetAmount').val();
		if(filterPetAmount != null && filterPetAmount !== '')
			filters.push({ name: 'fq', value: 'petAmount:' + filterPetAmount });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPetKey = $formFilters.find('.valuePetKey').val();
		if(filterPetKey != null && filterPetKey !== '')
			filters.push({ name: 'fq', value: 'petKey:' + filterPetKey });
	}
	return filters;
}

function adminsearchSitePetVals(filters, success, error) {

	$.ajax({
		url: '/api/admin/pet?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSitePetObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-dog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSitePetVals($formFilters, success, error);
}

async function websocketSitePet(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSitePet', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SitePetForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pale-green ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fas fa-dog w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify pets in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-pale-green ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).html($margin);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});
	}
}
async function websocketSitePetInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSitePetVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSitePet' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSitePet' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSitePet' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSitePet' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSitePet' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSitePet' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'Deleted'));
			}
			var val = o['petName'];
			if(vars.includes('petName')) {
				$('.inputSitePet' + pk + 'PetName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'PetName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'PetName'));
			}
			var val = o['petFoodAmount'];
			if(vars.includes('petFoodAmount')) {
				$('.inputSitePet' + pk + 'PetFoodAmount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'PetFoodAmount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'PetFoodAmount'));
			}
			var val = o['enrollmentKeys'];
			if(vars.includes('enrollmentKeys')) {
				$('.inputSitePet' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'EnrollmentKeys'));
			}
			var val = o['petFood'];
			if(vars.includes('petFood')) {
				$('.inputSitePet' + pk + 'PetFood').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'PetFood').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'PetFood'));
			}
			var val = o['petSick'];
			if(vars.includes('petSick')) {
				$('.inputSitePet' + pk + 'PetSick').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'PetSick').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'PetSick'));
			}
			var val = o['petMedNote'];
			if(vars.includes('petMedNote')) {
				$('.inputSitePet' + pk + 'PetMedNote').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'PetMedNote').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'PetMedNote'));
			}
			var val = o['petTrouble'];
			if(vars.includes('petTrouble')) {
				$('.inputSitePet' + pk + 'PetTrouble').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'PetTrouble').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'PetTrouble'));
			}
			var val = o['sendpdates'];
			if(vars.includes('sendpdates')) {
				$('.inputSitePet' + pk + 'Sendpdates').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'Sendpdates').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'Sendpdates'));
			}
			var val = o['petAmount'];
			if(vars.includes('petAmount')) {
				$('.inputSitePet' + pk + 'PetAmount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'PetAmount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'PetAmount'));
			}
			var val = o['userKeys'];
			if(vars.includes('userKeys')) {
				$('.inputSitePet' + pk + 'UserKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'UserKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'UserKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSitePet' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSitePet' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSitePet' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSitePet' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSitePet' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSitePet' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSitePet' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSitePet' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSitePet' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSitePet' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSitePet' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSitePet' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSitePet' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSitePet' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'PageUrlPk'));
			}
			var val = o['petKey'];
			if(vars.includes('petKey')) {
				$('.inputSitePet' + pk + 'PetKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSitePet' + pk + 'PetKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSitePet' + pk + 'PetKey'));
			}
		});
	}
}
