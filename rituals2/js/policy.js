 class Policy {
    constructor(id,color,lang = "de"){
        this.id = id
        this.color = color
        this.lang = lang 
    }
    draw(params) {
      try {
        const root = document.getElementById(this.id)
        const policyBtn = document.createElement('p')
        const backdrop = document.createElement('div')
        const modal = document.createElement('div')
        const modalHeader = document.createElement('div')
        const modalTitle = document.createElement('p')
        const closeBtn = document.createElement('span')
        const modalContent = document.createElement('div')

        root.style.padding = "30px 0"
        root.style.position = "relative"
        root.style.zIndex = 999
        
        policyBtn.innerText = _langs[this.lang].policyBtn
        policyBtn.style.textAlign = "center"
        policyBtn.style.color = this.color=='white'?'#fff':'#fff'
        policyBtn.style.cursor = 'pointer'
        policyBtn.style.fontSize = "14px"

        backdrop.style.height ="100vh"
        backdrop.style.width = "100vw"
        backdrop.style.position = "fixed"
        backdrop.style.top = 0
        backdrop.style.background = "rgba(0,0,0,0.7)"
        backdrop.style.zIndex = 1000
        backdrop.style.overflow = 'hidden'
        backdrop.style.display = "flex"
        backdrop.style.justifyContent ="center"
        backdrop.style.alignItems = "center"
        

        modal.style.maxWidth = "700px"
        modal.style.width = "100%"
        modal.style.margin = "15px"
        modal.style.background = "#fff"
        modal.style.borderRadius = "10px"
        modal.style.boxShadow = "0 5px 15px rgb(0 0 0 / 50%)"
        modal.style.minHeight = "300px"
        modal.style.maxHeight = "90vh"
        modal.style.paddingBottom ="15px"

        modalHeader.style.padding = "15px"
        modalHeader.style.borderBottom = "1px solid #e5e5e5"
        modalHeader.style.display = "flex"
        modalHeader.style.justifyContent = "space-between"
        modalHeader.style.alignItems = "center"

        modalTitle.innerText = _langs[this.lang].policyBtn
        modalTitle.style.fontSize = "14px"
        modalTitle.style.textTransform = "uppercase"
        modalTitle.style.textAlign = "left"
        modalTitle.style.color ="#fff"
        modalTitle.style.margin = 0

        modalContent.style.padding = "15px"
        modalContent.style.overflowY = "scroll"
        modalContent.style.maxHeight = "70vh"
        modalContent.style.fontSize = "16px"
        modalContent.style.textAlign = "left"
        modalContent.style.color = "#000"

        closeBtn.style.height = "24px"
        closeBtn.style.width = "24px"
        closeBtn.style.background = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\")"
        closeBtn.style.backgroundSize = "14px"
        closeBtn.style.backgroundRepeat = "no-repeat"
        closeBtn.style.backgroundPosition = "center"
        closeBtn.style.cursor = "pointer"
        root.appendChild(policyBtn)

        modalContent.innerHTML = _langs[this.lang].policyContent

        backdrop.appendChild(modal)
        modal.appendChild(modalHeader)
        modalHeader.appendChild(modalTitle)
        modalHeader.appendChild(closeBtn)
        modal.appendChild(modalContent)
        policyBtn.addEventListener('click',()=>{
            document.body.appendChild(backdrop)
            document.body.style.overflow = "hidden"
        })
        closeBtn.addEventListener('click',()=>{
            document.body.removeChild(backdrop)
            document.body.style.overflow = "auto"
        })

      } catch (e) {
          console.log(e)
      }
    }
}

const _langs = {
    de: {
        policyBtn: "Datenschutzerklärung",
        policyContent:  `ALLGEMEINE INFORMATIONEN <br><br>
        Wir erheben personenbezogene Daten ('Informationen'), die wir von Ihnen per E-Mail und aus den von Ihnen ausgefüllten Anmeldefragebogen erhalten.
        <br> Diese Datenschutzrichtlinie ist integrierender Bestandteil der Nutzungsvereinbarung und der Einwilligung in die Verarbeitung personenbezogener Daten.
        <br>    Wir erheben auch Daten, wenn Sie sich freiwillig an Umfragen beteiligen, zu denen wir Sie einladen, oder wenn Sie Feedback, Kommentare oder andere Informationen auf unserer Webseite der Panelteilnehmer hinterlassen.
        <br>   Wenn der Anmeldevorgang nicht erfolgreich abgeschlossen wurde, speichern wir keine Informationen über Sie, mit Ausnahme der begrenzten Informationen, die notwendig sind, um Betrug oder missbräuchliche Verwendung zu verhindern.
        <br>  Sie sind nicht verpflichtet, alle Fragen zu beantworten; in solchen Fällen besteht immer die Option 'Ich enthalte mich der Antwort'. Die Antworten auf diese Fragen werden vertraulich behandelt, es sei denn, Sie erklären sich offen und ausdrücklich damit einverstanden, dass Ihre Antworten auf diese Fragen zusammen mit Ihren persönlichen Daten an die Auftraggeber der Studie zur weiteren eingehenden Analyse weitergeleitet werden.
        <br><br>   WARUM WIR INFORMATIONEN ÜBER SIE ERHEBEN
        <br><br>Der Hauptzweck der Erhebung von Informationen über Sie ist die Marktforschung. Wenn Sie uns beitreten, schließen wir einen Vertrag mit Ihnen ab, der dieser Datenschutzrichtlinie sowie unseren Regeln unterliegt.
        <br> Um diesen Vertrag zu erfüllen, indem wir Sie zu relevanten Fragen einladen, müssen wir Informationen sammeln, verarbeiten und klassifizieren, die zum Zeitpunkt der Anwerbung neuer Teilnehmer angefordert werden oder die Sie zu einem späteren Zeitpunkt Ihrem Profil auf der Webseite der Panelteilnehmer hinzufügen können oder die wir in übereinstimmung mit dieser Datenschutzrichtlinie sammeln und mit automatischen Mitteln verarbeiten. Diese Informationen werden auch benötigt, um Ihnen Auszeichnungen zukommen zu lassen und um Sie bezüglich von Umfragen zu kontaktieren. Diese Frage wird auch in unseren Regeln ausführlich erläutert.
        <br> <br> Darüber hinaus erheben wir Informationen von Ihnen mit Ihrer Zustimmung, insbesondere wenn Sie auf Einladungen zur Teilnahme an Umfragen antworten, die wir Ihnen zusenden können, oder wenn Sie sie in anderen Fällen freiwillig zur Verfügung stellen. Ihre Antworten auf solche Umfragen sind Ihre Entscheidung. In einigen Situationen können wir Ihre zusätzliche oder sogar ausdrückliche Zustimmung verlangen, wenn dies angemessen oder notwendig ist. Die Tätigkeit im Allgemeinen und die Funktionsweise des Panels werden in unseren Regeln näher beschrieben.
        <br> Wie verwenden wir die Informationen, die wir von Ihnen erhalten?
        <br><br> Wir verwenden die Informationen, die wir von Ihnen erhalten, um
        <br> - um alle Panelteilnehmer zu erfassen und anonyme Profile auf der Grundlage der von Ihnen bereitgestellten Informationen zu erstellen.
        <br>  - um Ihnen Einladungen zur Teilnahme an Umfragen zu schicken, denen Sie gemäß den Informationen entsprechen, die Sie in Ihrem Anmeldefragebogen angegeben oder eventuell zu einem späteren Zeitpunkt aktualisiert haben;
        <br>  - Wenn Sie ausdrücklich und gesondert zugestimmt haben, bevor Ihre Daten an den Auftraggeber weitergegeben werden, kann der Auftraggeber diese Daten auch dazu verwenden, Sie zu kontaktieren, um Sie zur Teilnahme an weiteren von ihm durchzuführenden Forschungen einzuladen
        <br>  - Wenn Ihre Zustimmung vorliegt, Ihre Daten an andere Partner von "Lucky Dealz" weiterzugeben
        <br>  - Wir werden alle angemessenen Maßnahmen ergreifen, um zu gewährleisten, dass alle von uns verarbeiteten personenbezogenen Daten richtig, angemessen, relevant und nicht übermäßig sind, unter Berücksichtigung des Zwecks, für den sie erhoben wurden. Wir werden die für einen bestimmten Zweck erhobenen personenbezogenen Daten nicht für andere, nicht damit zusammenhängende Zwecke verwenden, es sei denn, Sie haben Ihre Zustimmung gegeben.
        <br> <br>  - Wir verwenden Ihre Daten IMMER nur zu Forschungszwecken und in Übereinstimmung mit diesen Regeln. Wir werden NICHT versuchen, Ihnen etwas zu verkaufen oder Sie betreffende Informationen für Marketingzwecke zu verwenden, es sei denn, dies steht im Zusammenhang mit dem Zweck dieses Panels (z. B. Teilnahme an weiteren Umfragen). Unter keinen Umständen werden Informationen über Sie zu Marketing- oder Werbezwecken an Dritte weitergegeben.
        <br>  Verwendung von Cookies oder ähnlichem Code?
        <br> <br> Indem Sie unserem Panel beitreten und an unserer Online-Forschung teilnehmen, erklären Sie sich damit einverstanden, dass wir Cookies und ähnliche Technologien ('Cookies') verwenden und für die Dauer Ihrer Teilnahme an unseren Online-Forschungen Informationen von Ihrem Computer/Laptop oder einem anderen Computergerät sammeln, wie unten beschrieben.
        <br>Die Website unseres Panels und die Online-Umfragen sammeln Informationen mithilfe von Cookies und funktionell ähnlichen Technologien. Das sind kleine Dateien, die auf Ihrem Computer gespeichert werden.
        <br> <br> Die E-Mails, die wir an mögliche neue Panelteilnehmer senden, setzen ebenfalls ein Cookie, wenn Bilder heruntergeladen und E-Mails geöffnet werden. Sie können das Setzen von Cookies verhindern, indem Sie die E-Mail nur als Text öffnen, die E-Mail vor dem Hochladen von Bildern schließen oder die Einstellungen der Software Ihres Browsers bzw. Ihrer E-Mail so ändern, dass Cookies nicht zugelassen werden.
        <br> Basis-Cookies
        <br><br> Basis-Cookies, die für dieses Panel verwendet werden können:
        <br> balancerNode - wird intern für den Lastausgleich verwendet
        <br> token - wird verwendet, um Sie von anderen Nutzern der Website zu unterscheiden
        <br> sessionId - dient zur Identifizierung der aktuellen Sitzung
        <br> <br>  Cookies von Dritten können auch von anderen Unternehmen gesetzt werden.
        <br>  Wie können Sie auf Ihre Daten zugreifen und/oder sie korrigieren und/oder ihre Übertragung und/oder Löschung beantragen?
        <br> <br>  Sie haben das Recht, eine Kopie aller Informationen über Sie zu verlangen, die wir verwahren. Sie haben das Recht, uns aufzufordern, Informationen über Sie, die wir verwahren, zu korrigieren. Sie haben auch das Recht, der anderen Partei alle Informationen zu übergeben, die Sie uns bereitgestellt haben. In vielen Fällen haben Sie auch das Recht, die Löschung Ihrer persönlichen Daten zu verlangen, die wir verwahren.
        <br>  In all diesen Fällen wenden Sie sich bitte an unsere Datenschutzabteilung. Sie können sie wie folgt kontaktieren:
        <br>  Senden Sie eine E-Mail mit einer Bitte an die folgende Adresse: contact@luckydealz.org
        `
    },
    en:{
        policyBtn: "Privacy Policy",
        policyContent:  `GENERAL INFORMATION<br><br>
        We collect personal information ("information") that we receive from you via email and from the registration forms you fill out.
        <br> This Privacy Policy is an integral part of the User Agreement and Consent to Process Personal Data.
        <br>   If the registration process is not successfully completed, we do not retain information concerning you other than the limited information necessary to prevent fraud or misuse.
        <br>  You don't have to answer every question; there is always an "abstain from answering" option in such cases. The answers to these questions will remain confidential unless you openly and explicitly consent to your answers to these questions along with your personal information being sent to the research clients for further in-depth analysis.
        <br><br> WHAT'S THE PURPOSE OF COLLECTING INFORMATION PERTAINING TO YOU?
        <br><br> The main purpose of collecting information pertaining to you is market research. When you join us, we enter into an agreement with you that is subject to this Privacy Policy as well as our policies.
        <br> To fulfill this agreement by inviting you to relevant questions, we need to collect, process and classify information requested at the time of recruiting new members, or which may be subsequently added by you to your profile on the panelist site, or which we collect in accordance with this Privacy Policy and process through automated means. We will also need this information to send you awards and to contact you about surveys. This issue is also explained in detail in our Rules.
        <br> <br> In addition, we collect information from you with your consent, in particular when you respond to survey invitations that we may send you or when you voluntarily provide it in other cases. Your answers to such surveys are your choice. In some situations, we may need your additional or even explicit consent when it is appropriate or necessary. Activities in general and the principle of the panel are described in more detail in our Rules.
        <br> How do we use the information we get from you?
        <br><br> We use the information we receive from you:
        <br> - to keep records of all panelist and create anonymous profiles based on the information you provide
        <br>  - to send you invitations to participate in surveys that you meet according to the information you provided in your registration form(s) or may have updated at a later date;
        <br>  - If you have explicitly consented separately and before your information is shared with the customer, the customer may also use that information to contact you to invite you to participate in further research he is conducting
        <br>  -If you agree to share your information with other partners of  "Lucky Dealz"
        <br>  We will take all reasonable steps to ensure that all personal data we process is accurate, adequate, relevant and not excessive, taking into account the purpose for which it was collected. We will not use personal information collected for one purpose for other, unrelated purposes unless you have given your consent.
        <br> <br>  -We ALWAYS use your data only for research purposes and in accordance with this policy. Unless it is related to the purpose of this panel (such as participating in further surveys), we will NOT try to sell you anything or to use information pertaining to you for marketing purposes. Under no circumstances, information pertaining to you will be given to third parties for marketing or promotional purposes.
        <br> Using cookies or similar code?
        <br> <br> By joining our panel and participating in our online research, you consent to our use of cookies and similar technologies ("Cookies") and to the collection of information from your computer/laptop or other computing device while participating in our online research as outlined below.
        <br> Our panel site and online surveys collect information using cookies and functionally similar technologies. These are small files that are stored on your computer.
        <br> <br> The emails we send to possible new panel members also place cookies when they download images and open emails. You can prevent cookies from being placed by simply opening the email as text only, closing the email before downloading the images, or by changing your browser/email software settings to restrict cookies.
        <br> Basic cookies
        <br><br> Basic cookies that can be used for this panel:
        <br> balancerNode is used internally for load balancing
        <br> token is used to distinguish you from other users of the site
        <br> sessionId is used to identify the current session
        <br> <br>  Other companies may also set third-party cookies
        <br>  How can I access and/or correct my information, and/or request that it shall be transferred and/or deleted?
        <br> <br> You have the right to request a copy of all information we keep about you. You have the right to request a correction of any data we keep about you. In addition, you have the right to give the other party all the information you give us. In many circumstances, you also have the right to request that we delete your personal information we maintain.
        <br>  In all of these cases, contact our Data Protection Department. You can contact them in the following ways:
        <br>  By sending an email to: contact@luckydealz.org
        `
    }
}