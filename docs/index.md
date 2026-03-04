<script>
  // Redirect to Icelandic home by default, respect saved preference
  (function(){
    try{
      const pref = localStorage.getItem('preferred_lang');
      const target = pref === 'en' ? '/en/' : '/is/';
      location.replace(target);
    }catch(e){
      // ignore
    }
  })();
</script>

# Welcome / Velkomin

You will be redirected to the Icelandic site by default.

- Íslenska: [/is/](./is/)
- English: [/en/](./en/)
