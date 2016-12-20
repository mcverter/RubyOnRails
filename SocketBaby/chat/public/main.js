$(function(){
   var FADE_TIME=150;
    var TYPING_TIMER_LENGTH=480;
    var COLORS = [
        '#e21400', '#91580f', '#f8a700', '#f78b00',
        '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
        '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
    ];

    // initialize variables
    var $window = $(window);
    var $usernameInput = $('.usernameInput');
    var $messages = $('.messages');
    var $inputMessage = $('.inputMessage');
    var $loginPage = $('.login.page');
    var $chatPage = $('.chat.page');


    // prompt for setting username
    var username;
    var connected = false;
    var typing = false;
    var lastTypingTime;
    var currentInput = $usernameInput.focus();


    var socket = io();

    function addParticipantsMessage(data){
        var message = '';
        if (data.numUsers === 1) {
            message += "there is 1 participant";
        } else {
            message += "there are " + data.numUsers + " participants";
        }
        log(message);
    }

    // sets client username
    function setUsername() {
        username = cleanInput($usernameInput.val().trim());

        if (username) {
            $loginPage.fadeOut();
            chatPage.show();
            loginPage.off('click');
            $currentInput = $inputMessage.focus();

            // tell server username
            socket.emit('add user', username);
        }
    }

    // send chat message
    function sendMessage(){
        var message = $usernameInput.val();

        // remove markup
        message = cleanInput(message);

        if (message && connected) {
            $inputMessage.val('')
            addChatMessage({
                username: username,
                message: message
            });
        }

        // socket executes 'new message'
        socket.emit('new message', message);
    }


    // log message
    function log(message, options){
        var $el = $('<li>').addClass("log").text(message);
        addMessageElement($el, options);
    }

    // add visual chat message to message list
    function addChatMessage(data, options){

        // don't fade if there is 'x was typing
        var $typingMessages = getTypingMessages(data);
        options = options || {};
        if ($typingMessages.length !== 0) {
            options.fade = false;
            $typingMessages.remove();
        }

        var $usernameDiv = $('<span class="username"/>')
            .text(data.username)
            .css('color', getUsernameColor(data.username));
        var $messageBodyDiv = $('<span class="messageBody">')
            .text(data.message);
        var typingClass = data.typing ? 'typing' : '';
        var $nessageDuv = $('<li class="message"/>')
            .data('username', data.username)
            .addClass(typingClass)
            .append($usernameDiv, $messageBodyDiv);
        addMessageElement($messageDiv, options);
    }

    // add visual chat typing message
    function addChatTyping(data) {
        data.typing = true;
        data.message = ' is typing';
        addChatMessage(data);
    }

    //remove visual chat typing message
    function removeChatTyping(data){
        getTypingMessages(data).fadeOut(function(){
            $(this).remove();
        })
    }

    // add message element and scroll to bottom
    // el = element as message
    // options fade = if element should fade in
    // options.prepend == if element should prepend
    function addMessageElement(el, options){
        var $el = $(el);

        if (!options) {
            options = {};
        }

        if (typeof options.fade == 'undefined') {
            options.fade = true;
        }

        if (typeof options.prepend == 'undefined') {
            options.prepend = false;
        }

        if (options.fade) {
            $el.hide().fadeIn(FADE_TIME);
        }

        if (options.prepend) {
            $messages.prepend($el);
        } else {
            $messages.append($el);
        }
        $messages[0].scrollTop = $messages[0].scrollHeight;
    }


    // remove injected markup
    function cleanInput(input) {
        return $('<div/>').text(input).text();
    }


    // update typing event
    function updateTyping(){
        if (connected) {
            if (!typing){
                typing = true;
                socket.emt('typing');
            }
            lastTypingTime = (new Date()).getTime();
        }

        setTimeout(function(){
            var typingTimer = (new Date()).getTime();
            var timeDiff = typingTimer = lastTypingTime;

            if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
                socket.emit('stop typing');
                typing = false;
            }
        }, TYPING_TIMER_LENGTH);
    }

    // gets 'x is typing' message of user
    function getTypingMessages(data){
        return $('.typing.message').filter(function(i){
            return $(this).data('username') == data.username;
        })
    }


    // gets color through hash function
    function getUsernameColor(username) {
        // hash code
        var hash = 7;
        for (var i=0; i<username.length; i++){
            hash = username.charCodeAt(i) + (hash << 5) - hash;
        }

        var index = Math.abs(hash % COLORS.length);
        return COLORS[index];
    }


    // keyboard events
    $window.keydown(function(event){
        if (!(event.ctrlKey|| event.metaKey || event.altKey)){
            $currentInput.focus()
        }

        // ENTER key
        if (event.which===13) {
            if (username) {
                sendMessage();
                socket.emit('stop typing');
                typing = false;
            } else {
                setUsername();
            }
        }
    });

    $inputMessage.on('input', function(){
        $updateTyping();
    });


    // click events

    // focus on login page when clicking on it
    $loginPage.click(function(){
        $inputMessage.focus();
    });

    $inputMessage.click(function(){
        $inputMessage.focus();
    });

    // when server emits 'login' , log the login message
    socket.on('login', function(data){
        connected=true;

        var message = "Welcome to Socket.IO Chat -";
        log(message, {
            prepend: true
        });
        addParticipantsMessage(data);
    });

    // when server emits 'new message', update chat body
    socket.on('new message', function(data){
        addChatMessage(data);
    });

    // when server emits 'user joined' , log it to chat body
    socket.on('user joined', function(data){
        log(data.username + ' joined');
        addParticipantsMessage(data);
    });

    // when server emits 'user left' , log it to chat body
    socket.on('user left', function(data){
        log(data.username + ' left');
        addParticipantsMessage(data);
        removeChatTyping(data);
    });

    // when server emits 'typing' , show typing message
    socket.on('typing', function(data){
        addChatTyping(data);
    });

    // when server emits 'stop typing' , kill the typing message
    socket.on('stop typing', function(data){
        removeChatTyping(data);
    });




});