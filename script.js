document.addEventListener('DOMContentLoaded', function() {
    const hidden_exercises = document.querySelectorAll('#exercise');
    const btn_navs = document.querySelectorAll('.btn-nav');
    const exercise_area = document.querySelector('#exercise-area');
    const exercise_header = document.querySelector('span');

    let index = 0;
    exercise_area.innerHTML = hidden_exercises[index].innerHTML;

    btn_navs.forEach( btn_nav => {
        btn_nav.addEventListener('click', ()=> {
            if (btn_nav.innerHTML === "Suiv."){
                if (index != hidden_exercises.length - 1) {
                    index += 1;
                    exercise_header.innerHTML = (index+1);

                    btn_navs[0].style.color = '';
                    exercise_area.innerHTML = hidden_exercises[index].innerHTML;
                } else {
                    btn_nav.style.color = "grey";
                    btn_nav.removeEventListener('click', true);
                }
            } else {
                if (index > 0){
                    index -= 1;
                    
                    exercise_header.innerHTML = (index+1);
                    btn_navs[1].style.color = '';
                    exercise_area.innerHTML = hidden_exercises[index].innerHTML;
                } else {
                    btn_nav.style.color = "grey";
                    btn_nav.removeEventListener('click', true);
                }
            }
        });
    });
    function highlightCode(code) {
        // Remplacer les balises par des éléments span
        return code
            .replace(/&lt;!--(.*?)--&gt;/g, '<span class="comment">&lt;!--$1--&gt;</span>') // Commentaires
            .replace(/(&lt;\/?)([a-z]+)(.*?&gt;)/gi, '$1<span class="highlight">$2</span>$3') // Balises
            .replace(/(&quot;.*?&quot;|\'(.*?)\'|&lt;(.*?)&gt;)/g, '<span class="string">$1</span>'); // Chaînes de caractères
    }

    // Sélectionner le code et appliquer le highlighting
    const codeBlock = document.getElementById('codeBlock');
    codeBlock.innerHTML = highlightCode(codeBlock.innerHTML);
});