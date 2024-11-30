const sheetName = ''
const scriptProp = PropertiesService.getScriptProperties()

function initialSetup () {
  const activeSpreadsheet = SepredsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
    const lock = LockService.getScriptLock()
    lock.tryLock(10000)

    try {
        const doc = SpredsheetApp.openById(scriptProp.getProperty('key'))
        const sheet = doc.getSheetByName(sheetName)

        const headers = sheet.getRange(1, 1, 1, sheet.getLastColomn()).getValues()[0]
        const nextRow = sheet.getLastRow() + 1

        const newRow = headers.map(function(header) {
            return header === 'Date' ? new Date() : e.parameter[header]
        })

        sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

        return ContentService.createTextOutput(JSON.stringify({'result': 'succes', 'row': nextRow  }))
        setMimeType(ContentService.MimeType.JSON)
    }

    catch (e) {
        return ContentService.createTextOutput(JSON.stringify({'result': 'succes', 'row': e }))
        setMimeType(ContentService.MimeType.JSON)
    }

    finally {
        lock.releaseLock()
    }
}

const sheetName = 'form data'; // Provide the sheet name here
const scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet(); // Fixed typo
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key')); // Fixed typo
    const sheet = doc.getSheetByName(sheetName);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]; // Fixed typo
    const nextRow = sheet.getLastRow() + 1;

    const newRow = headers.map(function(header) {
      return header === 'Date' ? new Date() : e.parameter[header];
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({'result': 'success', 'row': nextRow}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({'result': 'error', 'message': e.message}))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

AKfycbzYXnYZnAWRIhLY98SMXBfSC8ZItEYTgxafG3AC0nod4oeQwLKaGle_b45b69PQk-c

https://script.google.com/macros/s/AKfycbzYXnYZnAWRIhLY98SMXBfSC8ZItEYTgxafG3AC0nod4oeQwLKaGle_b45b69PQk-c/exec