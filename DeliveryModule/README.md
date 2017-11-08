How to use:

1- with your terminal get into this folder [yourPath]/Translation/

2- duplicate the folder "Master" and rename it the name of the module you need to translate

3- (in terminal:) npm install copy-dir

4- expand the deliverable from LOC ticket into this folder as well, 
-- it should replace the "Target-[Language] ([Country]) folders"

5- in the folder i18n/[your module name] copy your original "en-us" i18n file from your app so you get
Translation/[your module name]/i18n/en-us

6- from here in the terminal run => node translate