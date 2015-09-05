#include <fstream>
#include <iostream>
#include <string>
#include <time.h>
#include <algorithm>
using namespace std;

string& replace_all(string& str,const string& old_value,const string& new_value)
{
    while(true)
    {
        int pos=0;
        if((pos=str.find(old_value,0))!=string::npos)
            str.replace(pos,old_value.length(),new_value);
        else break;
    }
    return str;
}


int main( int argc, char * argv[] )
{
	string phpgive = argv[1];
	string txt = ".txt";
	string videopagetxt = phpgive + txt;
	ifstream videopage( videopagetxt.c_str() );
	if( !videopage )
	{
		cout << "cannot open file" << "---" << videopagetxt << endl;
	}
	

	int videocount=0;
	int linkscount=0;
	string urlintxt;
	string tmpfiletxt = phpgive + "-tmp" + txt;
	while( getline(videopage,urlintxt) )
	{
		FILE *fp;
		string tmpurl = "\""+urlintxt+ "\"";
		string cmd = "/usr/local/bin/youtube-dl -sge " + tmpurl + " >> " + tmpfiletxt;

		const char * opencmd = cmd.c_str();
		videocount++;
		fp = popen( opencmd, "r" );
		pclose(fp);
	}
	
	ifstream tmppage( tmpfiletxt.c_str() );
	if( !tmppage )
	{
		cout << "cannot open file" << "---" << tmpfiletxt << endl;
	}

	string linkspagetxt = phpgive + "-links.html";
	ofstream linkspage( linkspagetxt.c_str() );
	if( !linkspage )
	{
		cout << "cannot open file " << "---" << linkspagetxt << endl;
	}

	linkspage << "<!DOCTYPE HTML>"  << endl;
	linkspage << "<html lang=\"zh-CN\">" << endl;
	linkspage << "<meta charset=\"utf-8\">" << endl;
	linkspage << "<head><title>download links</title></head><body>" << endl;

	string line;
	string videoname;
	while( getline(tmppage,line) )
	{

		if( line.find( "https://" ) == 0 )
		{
			line = line + "&title=" + videoname;	
			linkspage << line << endl;
			linkspage << "<br/>" << endl;
			linkscount++;
		}
		else
		{
			videoname = line;
			replace_all( videoname, "c#", "C sharp ");
			replace_all( videoname, "C#", "C sharp ");
			replace_all( videoname, "#", " ");
			replace_all( videoname, "[", " ");
			replace_all( videoname, "]", " ");
			replace_all( videoname, "¿", " ");
			replace_all( videoname, "¿", " ");
			replace_all( videoname, "¿", " ");
			replace_all( videoname, "¿", " ");
			replace_all( videoname, "&", " and  ");
		}
		if(linkscount==videocount)
		{
		}
	}

	linkspage << "</body></head>" << endl;

	tmppage.close();
	linkspage.close();
	videopage.close();
	cout << "ALL closed!" << endl;
	return 0;
}
