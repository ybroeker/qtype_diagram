function onMessage(evt) {

    let iframe = document.getElementById("diagram");
    let answerId = iframe.getAttribute("input");
    let answerField = document.getElementById(answerId);
    let readonly = JSON.parse(iframe.getAttribute("readonly"));

    if (evt.data.length > 0) {
        let msg = JSON.parse(evt.data);

        if (msg.event === 'init') {
            let given_answer = answerField.getAttribute("value");
            let data = atob(given_answer);

            iframe.contentWindow.postMessage(JSON.stringify({action: 'load', xml: data, autosave: 1}), '*');
        } else if ((msg.event === 'autosave' || msg.event === 'save') && !readonly) {
            let data = btoa(msg.xml);
            answerField.setAttribute("value", data);
        } else if (msg.event === 'export') {

        }
    }

}

window.addEventListener('message', onMessage);