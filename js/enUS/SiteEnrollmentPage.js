
// PUTImport //

async function putimportSiteEnrollment($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSiteEnrollmentVals(JSON.parse(json), success, error);
}

function putimportSiteEnrollmentVals(json, success, error) {
	$.ajax({
		url: '/api/enrollment/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSiteEnrollment($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSiteEnrollmentVals(JSON.parse(json), success, error);
}

function putmergeSiteEnrollmentVals(json, success, error) {
	$.ajax({
		url: '/api/enrollment/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySiteEnrollment($formValues, pk, success, error) {
	var vals = {};

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

	var valuePetKeys = $formValues.find('input.valuePetKeys:checked').val();
	var valuePetKeysClear = $formValues.find('input.petKeys_clear:checked').val();
	if(valuePetKeysClear != null && valuePetKeysClear)
		vals['petKeys'] = null;
	else if(valuePetKeys != null && valuePetKeys)
		vals['petKeys'] = [valuePetKeys];

	var valueUserKeys = $formValues.find('.valueUserKeys').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['userKeys'] = valueUserKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	putcopySiteEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySiteEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/enrollment/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// POST //

async function postSiteEnrollment($formValues, success, error) {
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

	var valuePetKeys = [];
	$formValues.find('input.valuePetKeys:checked').each(function(index) {
		valuePetKeys.push($(this).val());
	});
	if(valuePetKeys.length > 0)
		vals['petKeys'] = valuePetKeys;

	var valueUserKeys = $formValues.find('.valueUserKeys').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['userKeys'] = valueUserKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

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
		url: '/api/enrollment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSiteEnrollmentVals(vals, success, error) {
	$.ajax({
		url: '/api/enrollment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSiteEnrollment($formFilters, $formValues, pk, success, error) {
	var filters = patchSiteEnrollmentFilters($formFilters);

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

	var valuePetKeys = $formValues.find('input.valuePetKeys:checked').val();
	if(valuePetKeys != null && valuePetKeys !== '')
		vals['addPetKeys'] = valuePetKeys;

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

	patchSiteEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSiteEnrollmentFilters($formFilters) {
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

		var filterPetKeys = $formFilters.find('.valuePetKeys').val();
		if(filterPetKeys != null && filterPetKeys !== '')
			filters.push({ name: 'fq', value: 'petKeys:' + filterPetKeys });

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

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });
	}
	return filters;
}

function patchSiteEnrollmentVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSiteEnrollmentVals(filters, vals, success, error);
}

function patchSiteEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSiteEnrollment(pk) {
	$.ajax({
		url: '/api/enrollment/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSiteEnrollment($formFilters, success, error) {
	var filters = searchSiteEnrollmentFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSiteEnrollmentVals(filters, success, error);
}

function searchSiteEnrollmentFilters($formFilters) {
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

		var filterPetKeys = $formFilters.find('.valuePetKeys').val();
		if(filterPetKeys != null && filterPetKeys !== '')
			filters.push({ name: 'fq', value: 'petKeys:' + filterPetKeys });

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

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });
	}
	return filters;
}

function searchSiteEnrollmentVals(filters, success, error) {

	$.ajax({
		url: '/api/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSiteEnrollmentObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-clipboard-list ');
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
	searchSiteEnrollmentVals($formFilters, success, error);
}

function suggestSiteEnrollmentPetKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-dog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_petKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePetKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_petKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSiteEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PetKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SiteEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSitePetVals(filters, success, error);
}

// AdminSearch //

async function adminsearchSiteEnrollment($formFilters, success, error) {
	var filters = adminsearchSiteEnrollmentFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchSiteEnrollmentVals(filters, success, error);
}

function adminsearchSiteEnrollmentFilters($formFilters) {
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

		var filterPetKeys = $formFilters.find('.valuePetKeys').val();
		if(filterPetKeys != null && filterPetKeys !== '')
			filters.push({ name: 'fq', value: 'petKeys:' + filterPetKeys });

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

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });
	}
	return filters;
}

function adminsearchSiteEnrollmentVals(filters, success, error) {

	$.ajax({
		url: '/api/admin/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSiteEnrollmentObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fad fa-clipboard-list ');
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
	searchSiteEnrollmentVals($formFilters, success, error);
}

function suggestSiteEnrollmentPetKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-dog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_petKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePetKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_petKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSiteEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PetKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SiteEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSitePetVals(filters, success, error);
}

async function websocketSiteEnrollment(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSiteEnrollment', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SiteEnrollmentForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-red ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fad fa-clipboard-list w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify enrollments in ' + json.timeRemaining);
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-red ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

		window.eventBus.registerHandler('websocketSitePet', function (error, message) {
			$('#Page_petKeys').trigger('oninput');
			$('#Page_petKeys_add').text('add a pet');
			$('#Page_petKeys_add').removeClass('w3-disabled');
			$('#Page_petKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSitePet', function (error, message) {
			$('#Page_petKeys').trigger('oninput');
			$('#Page_petKeys_add').text('add a pet');
			$('#Page_petKeys_add').removeClass('w3-disabled');
			$('#Page_petKeys_add').attr('disabled', false);
		});
	}
}
async function websocketSiteEnrollmentInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSiteEnrollmentVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSiteEnrollment' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSiteEnrollment' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSiteEnrollment' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSiteEnrollment' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSiteEnrollment' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSiteEnrollment' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'Deleted'));
			}
			var val = o['petKeys'];
			if(vars.includes('petKeys')) {
				$('.inputSiteEnrollment' + pk + 'PetKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'PetKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'PetKeys'));
			}
			var val = o['userKeys'];
			if(vars.includes('userKeys')) {
				$('.inputSiteEnrollment' + pk + 'UserKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'UserKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'UserKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSiteEnrollment' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSiteEnrollment' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSiteEnrollment' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSiteEnrollment' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSiteEnrollment' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSiteEnrollment' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSiteEnrollment' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSiteEnrollment' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSiteEnrollment' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSiteEnrollment' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSiteEnrollment' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSiteEnrollment' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSiteEnrollment' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSiteEnrollment' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'PageUrlPk'));
			}
			var val = o['enrollmentKey'];
			if(vars.includes('enrollmentKey')) {
				$('.inputSiteEnrollment' + pk + 'EnrollmentKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSiteEnrollment' + pk + 'EnrollmentKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSiteEnrollment' + pk + 'EnrollmentKey'));
			}
		});
	}
}
